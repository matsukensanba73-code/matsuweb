const fadeElems = document.querySelectorAll(".fadein-section");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, appearOptions);

fadeElems.forEach(elem => {
  appearOnScroll.observe(elem);
});