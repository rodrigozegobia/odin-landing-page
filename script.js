/*const menuBtn = document.querySelector('.menuHamburger')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
const list = document.querySelector('.rightBarStuff');
menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});


const qq = document.querySelector(".dropdownContent");
function s() {
    qq.style.display = "flex";
}

function c() {
    qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
        s()
    } else {
        c()
    }
}*/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

if (!serverSide) {
    visualViewport.addEventListener('resize', () => {
    ocument.documentElement.style.setProperty('--viewport-height', `${visualViewport.height}px`);
    });
}