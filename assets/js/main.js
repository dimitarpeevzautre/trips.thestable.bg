// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');
  const hero = document.getElementById('hero');

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Header transparency and parallax effect
  if (header && hero) {
    function updateHeader() {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      // Update header background based on scroll position
      if (scrollY < heroHeight - 100) {
        // Transparent header over hero
        header.classList.remove('bg-white', 'shadow-sm');
        header.classList.add('bg-transparent');
        // Make text white when over hero
        const links = header.querySelectorAll('a:not(.btn), span');
        links.forEach(link => {
          link.classList.remove('text-gray-700', 'text-gray-900');
          link.classList.add('text-white');
        });
        // Update button hover states
        const navLinks = header.querySelectorAll('a:not(.btn)');
        navLinks.forEach(link => {
          link.classList.remove('hover:text-primary-600');
          link.classList.add('hover:text-blue-200');
        });
      } else {
        // Solid white header
        header.classList.remove('bg-transparent');
        header.classList.add('bg-white', 'shadow-sm');
        // Restore original text colors
        const links = header.querySelectorAll('a:not(.btn), span');
        links.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-gray-700');
        });
        const titleSpan = header.querySelector('span.text-xl');
        if (titleSpan) {
          titleSpan.classList.remove('text-white');
          titleSpan.classList.add('text-gray-900');
        }
        // Restore button hover states
        const navLinks = header.querySelectorAll('a:not(.btn)');
        navLinks.forEach(link => {
          link.classList.remove('hover:text-blue-200');
          link.classList.add('hover:text-primary-600');
        });
      }

      // Parallax effect for hero
      const heroMedia = hero.querySelector('.hero-media');
      if (heroMedia && scrollY < heroHeight) {
        const parallaxSpeed = 0.5;
        const yPos = scrollY * parallaxSpeed;
        heroMedia.style.transform = `translateY(${yPos}px)`;
      }
    }

    // Initial header state - transparent over hero
    header.classList.add('bg-transparent');
    const links = header.querySelectorAll('a:not(.btn), span');
    links.forEach(link => {
      link.classList.add('text-white');
    });

    // Update on scroll
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial call
  }

  // Hero image zoom animation
  const heroImages = document.querySelectorAll('.hero-image');
  heroImages.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function () {
        this.classList.add('loaded');
      });
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Form submission handling (you can replace this with your actual form handler)
  const contactForm = document.querySelector('form[action="#"]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic form validation
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      const message = this.querySelector('#message').value;

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Show success message (replace with actual form submission)
      alert(
        "Thank you for your message! We'll get back to you within 24 hours."
      );
      this.reset();
    });
  }

  // Add loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function () {
      this.classList.add('loaded');
    });
  });
});

// Utility function for lazy loading images (optional enhancement)
function observeImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', observeImages);
}
