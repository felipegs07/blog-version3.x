setTimeout(() => {
    const colorBox = document.querySelector('.home');
    const homeText = document.querySelector('.home-text');
    const intro = document.querySelector('.intro');

    colorBox.classList.remove('color-box--opening');
    colorBox.classList.add('color-box--full');
    
    intro.classList.add('intro--show');
}, 2000);