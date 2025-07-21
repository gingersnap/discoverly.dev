// Import Alpine.js
import Alpine from 'alpinejs'
import { createIcons } from 'lucide'

// Initialize Alpine
window.Alpine = Alpine
Alpine.start()

// Initialize Lucide icons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  createIcons();
});

// Re-initialize Lucide icons on Alpine updates
document.addEventListener('alpine:init', () => {
  Alpine.magic('lucideRefresh', () => {
    return () => {
      createIcons();
    }
  });
});