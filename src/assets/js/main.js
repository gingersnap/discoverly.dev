// Import Alpine.js
import Alpine from 'alpinejs'

// Initialize Alpine
window.Alpine = Alpine
Alpine.start()

// Initialize Lucide icons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Re-initialize Lucide icons on Alpine updates
document.addEventListener('alpine:init', () => {
  Alpine.magic('lucideRefresh', () => {
    return () => {
      if (window.lucide) {
        lucide.createIcons();
      }
    }
  });
});