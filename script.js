document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.querySelector('.arrow');
    const arrow_i = document.querySelector('.arrow i');
    const startProjectButton = document.querySelector('.btn button');
    const menuOpen = document.querySelector('.menu_open');
    const menuItems = document.querySelectorAll('.menu_open .List ul li');
    const video = document.querySelector('video');

    // const movingText = document.querySelector('.moving-text');
    // const containerWidth = document.querySelector('.container').clientWidth;
    // let textWidth = movingText.clientWidth;

    // function moveText() {
    //     movingText.style.transform = `translateX(${containerWidth}px)`;
    //     setTimeout(() => {
    //         movingText.style.transform = `translateX(0px)`; 
    //     }, textWidth * 10);
    // }
    // setInterval(moveText, textWidth * 10);

    // window.addEventListener('load', () => {
    //     let loaderText = document.getElementById('loader-text');
    //     let content = document.getElementById('content');
    //     let loader = document.getElementById('loader');
    //     let count = 0;
      
    //     let interval = setInterval(() => {
    //       count++;
    //       loaderText.textContent = count + '%';
    //       if (count === 100) {
    //         clearInterval(interval);
    //         loader.classList.add('slide-down');
    //         setTimeout(() => {
    //           loader.style.display = 'none';
    //           content.style.display = 'block';
    //         }, 1000); 
    //       }
    //     }, 30); 
    // });

    const cursorDot = document.querySelector('.cursor-dot');


    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursorDot.style.transform = `translate(${mouseX-20}px, ${mouseY-20}px)`;

    });

    let menuOpenState = false;


    function updateIcon() {
        if (window.innerWidth < 996) {
            startProjectButton.textContent = 'Menu';
            arrow_i.classList.replace('fa-arrow-right', 'fa-bars');
            arrow.addEventListener('click', toggleMenu);
        } else {
            startProjectButton.textContent = 'Start a project';
            arrow_i.classList.replace('fa-bars', 'fa-arrow-right');
            arrow.removeEventListener('click', toggleMenu);
        }


    }

    function toggleMenu() {
        menuOpenState = !menuOpenState;
        if (menuOpenState) {
            menuOpen.style.display = 'flex';
            startProjectButton.style.display = 'flex';
            startProjectButton.textContent = 'Close';
            arrow_i.classList.replace('fa-bars', 'fa-times');
            menuItems.forEach((item, index) => {
                item.style.setProperty('--li-index', index);
            });
            startProjectButton.style.backgroundColor = '#fff';
            startProjectButton.style.color = '#000';

            arrow.style.backgroundColor = '#fff';
            arrow.style.color = '#000';
        } else {
            menuOpen.style.display = 'none';
            if (window.innerWidth < 996) {
                startProjectButton.textContent = 'Menu';

                startProjectButton.style.backgroundColor = '#000';
                startProjectButton.style.color = '#fff';

                arrow.style.backgroundColor = '#000';
                arrow.style.color = '#fff';

                arrow_i.classList.replace('fa-times', 'fa-bars');
            } else {
                arrow.style.backgroundColor = '#000';
                arrow.style.color = '#fff';
                startProjectButton.textContent = 'Start a project';
                arrow_i.classList.replace('fa-times', 'fa-arrow-right');
            }
        }
    }

    
    updateIcon();

    window.addEventListener('resize', updateIcon);

    video.muted = true;
    video.play()
});
