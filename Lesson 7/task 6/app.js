// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) 
// вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
function displayWindow () {
    let width = window.innerWidth;
    let height= window.innerHeight;
    let size = `Width: ${width}, Height: ${height}`;

    document.getElementById("rezult").innerHTML = size;
};

window.addEventListener("resize", displayWindow);
