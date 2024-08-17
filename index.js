window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    const maxScroll = 65; 
    const opacity = Math.max(0, 1 - (scrollPosition / maxScroll));

    header.style.opacity = opacity;
  });