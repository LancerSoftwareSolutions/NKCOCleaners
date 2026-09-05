const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const testimonials = [
  ['Highly recommend NK CO Cleaners for any commercial cleaning needs. They are professional, thorough, and efficient.', 'Matt.'],
  ['NK CO Cleaners transformed our newly built home with their builders clean. Every corner was spotless!', 'Dowell.'],
  ['Our office has never looked better. The team is reliable and always exceeds our expectations.', 'Lisa.']
];

const testimonialQuote = document.querySelector('[data-testimonial]');
const testimonialAuthor = document.querySelector('[data-author]');
const testimonialButtons = document.querySelectorAll('[data-testimonial-index]');

testimonialButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const [quote, author] = testimonials[Number(button.dataset.testimonialIndex)];
    testimonialQuote.textContent = quote;
    testimonialAuthor.textContent = author;
    testimonialButtons.forEach((item) => item.classList.toggle('is-active', item === button));
  });
});


