const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.home-content', { delay: 50, origin: 'top' });
sr.reveal('.home-image', { delay: 60, origin: 'top' });
sr.reveal('.home-sci', { delay: 50, origin: 'bottom' });


sr.reveal('.benef-content', { delay: 50, origin: 'right' });
sr.reveal('.benef-image', { delay: 60, origin: 'left' });


sr.reveal('.what_we_offer', { delay: 70, origin: 'left' });
sr.reveal('.frequent_questions', { delay: 60, origin: 'right' });
sr.reveal('.contact_us', { delay: 70, origin: 'left' });
