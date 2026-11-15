document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Sticky Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      });
    });
  }

  // 4. Service Category Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Interactive Quote Form Handling
  const quoteForm = document.getElementById('quickQuoteForm');
  const formSuccess = document.getElementById('formSuccess');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (quoteForm && formSuccess) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.classList.add('hidden');
      formSuccess.classList.remove('hidden');
    });
  }

  if (resetFormBtn && quoteForm && formSuccess) {
    resetFormBtn.addEventListener('click', () => {
      quoteForm.reset();
      formSuccess.classList.add('hidden');
      quoteForm.classList.remove('hidden');
    });
  }
});
