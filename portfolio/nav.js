const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click',()=> {
    document.body.classList.toggle('nav_open');
})

navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav_open');
    })
})
const profession = document.getElementById('profession');
var typewriter = new Typewriter(profession, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1000)
  .typeString("I'm a Web Designer")
  .pauseFor(1000)
  .deleteChars(12)
  .typeString("Web Developer")
  .start();

