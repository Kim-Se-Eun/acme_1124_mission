const ql = document.querySelectorAll('.question');

console.log(ql);
for(let q of ql){
    q.addEventListener('click',()=>{
        q.classList.remove('active')
        q.classList.add('active');
    });
}