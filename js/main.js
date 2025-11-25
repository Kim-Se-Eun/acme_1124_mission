const btt = document.querySelector('#btt');
const testimonial = document.querySelector('.testimonial');
const slideContainer = testimonial.querySelector('ul');
const slides = slideContainer.querySelectorAll('li');
let currentIdx = 0;
const prevBtn = testimonial.querySelector('.prev');
const nextBtn = testimonial.querySelector('.next');
const slideCount = slides.length;

window.addEventListener('scroll',()=>{
    let scrAmt = window.scrollY;
    if(scrAmt >= 300){
        btt.classList.add('active');
    } else{
        btt.classList.remove('active');
    }
});
btt.addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    });
});

moveSlide(0);

function moveSlide(idx){
    slideContainer.style.left = -idx*100+'%';
    currentIdx = idx;
    for(let slide of slides){
        slide.classList.remove('active');
    }
    slides[idx].classList.add('active');
}

prevBtn.addEventListener('click',()=>{
    let nextIdx = (currentIdx - 1 + slideCount)%slideCount;
    moveSlide(nextIdx);
});
nextBtn.addEventListener('click',()=>{
    let nextIdx = (currentIdx + 1)%slideCount;
    moveSlide(nextIdx);
});