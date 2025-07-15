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
    const heroHeight = hero.offsetHeight;
    const heroMedia = hero.querySelector('.hero-media');

    // Cache DOM queries and class lists
    const navLinks = header.querySelectorAll('a:not(.btn)');
    const titleSpan = header.querySelector('span.text-xl');

    function updateHeader() {
      const scrollY = window.scrollY;
      const isOverHero = scrollY < heroHeight - 100;

      // Update header background and text colors
      header.classList.toggle('bg-transparent', isOverHero);
      header.classList.toggle('bg-white', !isOverHero);
      header.classList.toggle('shadow-sm', !isOverHero);

      // Update link colors
      navLinks.forEach(link => {
        link.classList.toggle('text-white', isOverHero);
        link.classList.toggle('text-gray-700', !isOverHero);
        link.classList.toggle('hover:text-blue-200', isOverHero);
        link.classList.toggle('hover:text-primary-600', !isOverHero);
      });

      // Update title span color
      if (titleSpan) {
        titleSpan.classList.toggle('text-white', isOverHero);
        titleSpan.classList.toggle('text-gray-900', !isOverHero);
      }

      // Parallax effect for hero (only if still visible)
      if (heroMedia && scrollY < heroHeight) {
        const parallaxSpeed = 0.5;
        const yPos = scrollY * parallaxSpeed;
        heroMedia.style.transform = `translateY(${yPos}px)`;
      }
    }

    // Initial header state - transparent over hero
    updateHeader();

    // Use throttled scroll handler for better performance
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateHeader();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Hero image loading animation
  const heroImages = document.querySelectorAll('.hero-image');
  heroImages.forEach(img => {
    function handleImageLoad() {
      img.classList.add('loaded');
    }

    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
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

  // Form submission handling
  const contactForm = document.querySelector('form[action="#"]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic form validation
      const name = this.querySelector('#name')?.value;
      const email = this.querySelector('#email')?.value;
      const message = this.querySelector('#message')?.value;

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

  // Optimized image loading
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    function handleImageLoad() {
      img.classList.add('loaded');
    }

    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
    }
  });
});

// Utility function for lazy loading images
function observeImages() {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window && images.length > 0) {
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
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', observeImages);
}
