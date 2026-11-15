document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle over Hero Image
  const mobileTrigger = document.getElementById('mobileNavTrigger');
  const navLinks = document.getElementById('overlayNavLinks');
  if (mobileTrigger && navLinks) {
    mobileTrigger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileTrigger.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileTrigger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      });
    });
  }

  // 3. Vertical Testimonial Slider in Hero Bottom-Right
  const slides = document.querySelectorAll('.v-slide');
  const dots = document.querySelectorAll('.v-dot');
  const prevBtn = document.getElementById('vPrevBtn');
  const nextBtn = document.getElementById('vNextBtn');
  const sliderCard = document.getElementById('vSliderCard');
  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(targetIndex);
      resetAutoSlide();
    });
  });

  if (sliderCard) {
    sliderCard.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    sliderCard.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. Callback Form Submission
  const cbForm = document.getElementById('callbackForm');
  const cbSuccess = document.getElementById('cbSuccess');
  const cbReset = document.getElementById('cbReset');

  if (cbForm && cbSuccess) {
    cbForm.addEventListener('submit', (e) => {
      e.preventDefault();
      cbForm.classList.add('hidden');
      cbSuccess.classList.remove('hidden');
    });
  }

  if (cbReset && cbForm && cbSuccess) {
    cbReset.addEventListener('click', () => {
      cbForm.reset();
      cbSuccess.classList.add('hidden');
      cbForm.classList.remove('hidden');
    });
  }
});
