(function(){
    
    const sliders = [...document.querySelectorAll('.oferta__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentOferta = document.querySelector('.oferta__body--show').dataset.id;
        value = Number(currentOferta);
        value+= add;


        sliders[Number(currentOferta)-1].classList.remove('oferta__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('oferta__body--show');

    }

})();