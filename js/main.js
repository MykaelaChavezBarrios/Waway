const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.home-content', { delay: 200, origin: 'top' });
sr.reveal('.home-image', { delay: 500, origin: 'top' });
sr.reveal('.home-sci', { delay: 380, origin: 'bottom' });


sr.reveal('.benef-content', { delay: 700, origin: 'right' });
sr.reveal('.benef-image', { delay: 800, origin: 'left' });
