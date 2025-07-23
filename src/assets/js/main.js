// Import Alpine.js and Lucide
import Alpine from 'alpinejs'
import * as lucideIcons from 'lucide'

// Initialize Alpine
window.Alpine = Alpine
Alpine.start()

// Initialize Lucide icons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Filter out non-icon exports
  const icons = {};
  Object.entries(lucideIcons).forEach(([name, value]) => {
    // Only include actual icon components (exclude createIcons, etc.)
    if (name !== 'createIcons' && name !== 'default' && typeof value === 'object') {
      icons[name] = value;
    }
  });
  
  lucideIcons.createIcons({ icons });
})