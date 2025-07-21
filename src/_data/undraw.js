// unDraw illustrations configuration
// Visit https://undraw.co/illustrations to browse available illustrations

export default {
  // Base URL for unDraw illustrations
  baseUrl: 'https://undraw.co/api/illustrations',
  
  // Default color for illustrations (can be overridden per illustration)
  defaultColor: '#6366f1',
  
  // Helper function to get illustration URL
  getIllustrationUrl: (name, color = null) => {
    const illustrationColor = color || '#6366f1';
    return `https://undraw.co/svg/${name}_${illustrationColor.replace('#', '')}.svg`;
  }
};