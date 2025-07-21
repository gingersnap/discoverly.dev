import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function takeScreenshot(options = {}) {
  const {
    url = 'http://localhost:3000',
    outputPath = path.join(__dirname, 'screenshots'),
    fileName = 'webpage.png',
    fullPage = true,
    viewport = { width: 1280, height: 720 },
    mobile = false
  } = options;

  // Create screenshots directory if it doesn't exist
  const fs = await import('fs');
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: mobile ? { width: 375, height: 667 } : viewport,
    deviceScaleFactor: 2, // For higher quality screenshots
  });
  
  const page = await context.newPage();
  
  try {
    console.log(`📸 Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait a bit for any animations to complete
    await page.waitForTimeout(2000);
    
    const screenshotPath = path.join(outputPath, fileName);
    await page.screenshot({
      path: screenshotPath,
      fullPage: fullPage
    });
    
    console.log(`✅ Screenshot saved to: ${screenshotPath}`);
    
    // Also take specific section screenshots if requested
    if (options.sections) {
      for (const section of options.sections) {
        const element = await page.$(section.selector);
        if (element) {
          const sectionPath = path.join(outputPath, section.name);
          await element.screenshot({ path: sectionPath });
          console.log(`✅ Section screenshot saved to: ${sectionPath}`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Error taking screenshot:', error);
  } finally {
    await browser.close();
  }
}

// Command line usage
const args = process.argv.slice(2);
const url = args[0] || 'http://localhost:3000';
const mobile = args.includes('--mobile');
const sections = args.includes('--sections');

takeScreenshot({
  url,
  mobile,
  fileName: mobile ? 'mobile-view.png' : 'desktop-view.png',
  sections: sections ? [
    { selector: 'section:first-of-type', name: 'hero-section.png' },
    { selector: '#features', name: 'features-section.png' },
    { selector: 'footer', name: 'footer.png' }
  ] : undefined
});