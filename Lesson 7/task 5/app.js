// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме 
// повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
const body = document.body;                         // додаємо до HTML  елементи main, button, p
let main = document.createElement("main");
main.className = "mainClass";

let button = document.createElement("button");
button.id = "click";
button.innerText = "Click me!"

let p = document.createElement("p");
p.id = "text";


main.append(button);
main.append(p);
body.append(main);


// function clickButton() {                                                     // функція кліку на кнопку
//     document.getElementById("text").innerHTML += "I was pressed!<br>"
// }

// function focusMouse() {                                                      // функція "при наведенні на кнопку"
//   document.getElementById("text").innerHTML += "Mouse on me!<br>"
// }

// function onFocusMouse() {                                                    // функція "при відведенні курсора мишІ"
//   document.getElementById("text").innerHTML += "Mouse is not on me!<br>"
// }

// button.addEventListener("click", clickButton);                               // додаємо до button дії кліку, фокусу, та прибирання фокусу
// button.addEventListener("mouseover", focusMouse);                            // та викликаємо відповідну функцію
// button.addEventListener("mouseout", onFocusMouse);


// або
button.addEventListener("click", function clickButton() {
    document.getElementById("text").innerHTML += "I was pressed!<br>"
});

button.addEventListener("mouseover", function focusMouse() {
    document.getElementById("text").innerHTML += "Mouse on me!<br>"
});

button.addEventListener("mouseout", function onFocusMouse() {
    document.getElementById("text").innerHTML += "Mouse is not on me!<br>"
});

