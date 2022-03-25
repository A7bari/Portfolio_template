ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 400
});

ScrollReveal().reveal('.grid-container > *:first-child', { delay: 500, origin: 'left', reset: true,});
ScrollReveal().reveal('.title', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.grid-container > *:last-child, .cards_item', { delay: 600, origin: 'bottom', });
ScrollReveal().reveal('.social-media-icons', { delay: 500, origin: 'bottom', interval: 200 });