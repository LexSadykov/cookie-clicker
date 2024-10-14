const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clickCount = 0;
let isBig = false;

cookie.onclick = () => {
    clickCount++;
    counter.textContent = clickCount;

    if (isBig) {
        cookie.width = 200;
        cookie.height = 200;
    } else {
        cookie.width = 250;
        cookie.height = 250;
    }

    isBig = !isBig;
};
