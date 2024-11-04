const sessoes = document.querySelectorAll('section');
const experiencias = document.querySelectorAll('.experiencia__item');


const myObserver = new IntersectionObserver((elementos)=>{
    elementos.forEach(elemento => {
        console.log(elemento)
        if(elemento.isIntersecting){
            elemento.target.classList.add('show');
        }else{
            //elemento.target.classList.remove('show');
        }
    })
});

sessoes.forEach((sessao)=>{
    myObserver.observe(sessao);
})


const myObserver2 = new IntersectionObserver((elementos)=>{
    elementos.forEach((elemento) => {
        if(elemento.isIntersecting){
            elemento.target.classList.add('show');
        }else{
            //elemento.target.classList.remove('show');
        }
    })
})

experiencias.forEach(experiencia => {
    myObserver2.observe(experiencia);
})

