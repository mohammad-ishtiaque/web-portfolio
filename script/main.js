console.log("hello world")

/*=============== Active Link =============== */
const linework = document.querySelectorAll('.category__btn');

function activework(){
    linework.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work')
}


linework.forEach((a) => a.addEventListener('click',  activework)); 
/*=============== Mixitup Filter =============== */
var mixerProjetcs = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/*=============== Testimonials Swiper =============== */
