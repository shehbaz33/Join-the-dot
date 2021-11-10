const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('ul-show');

hamburger.addEventListener('click',() => {
    navUl.classList.toggle('show');
})

ScrollReveal({
    reset:true,
    distance:'50px',
    duration:1500,
    delay:400
})

ScrollReveal().reveal('.event',{delay:600,origin:'left',easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.startup-girl',{delay:1000,origin:'left',easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.right-side',{delay:300,origin:'right',easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.join',{scale:0.6,delay:100})
ScrollReveal().reveal('.image-anim1',{scale:0.6,easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.image-anim2',{scale:0.6,easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.keep-touch',{delay:700,origin:'right',easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.weekly',{delay:700,origin:'left',easing:'cubic-bezier(.5,0,0,1)'});
ScrollReveal().reveal('.quote',{delay:700,origin:'right',easing:'cubic-bezier(.5,0,0,1)'});