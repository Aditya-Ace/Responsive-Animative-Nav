const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

//Adding the Event Listener on the hamburger for the animation
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  console.log("Woow");
  links.forEach(link => {
    link.classList.toggle("fade");
  })
});