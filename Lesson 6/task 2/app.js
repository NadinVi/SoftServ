let h1 = document.querySelector("h1"); // постукали до заголовка
h1.style.backgroundColor = "#00FF00";  // заміна фону



let paragraph = document.querySelectorAll("p");   // постукали до "p"
paragraph[1].style.color = "red";                 // заміна кольору другого "p"
paragraph[0].style.fontWeight = "bold";           // заміна товщини шрифта першого "p"
paragraph[2].style.textDecoration = "underline";  // підкреслюємо третій "p"
paragraph[3].style.fontStyle = "italic";          // написали приписним четвертий "p"



let list = document.getElementById("myList");       // постукали до "myList"
let changeList = list.getElementsByTagName("li");   // постукали до "li"
    for (var i = 0; i < changeList.length; i++) {       // циклом проходимось по кожному "li" та змінюємо display для горизонтального положення кожного "li"
    changeList[i].style.display = "inline-block";
};
// list.style.display= "flex";
// list.style.listStyleType = "none";


let body = document.body;                       // постукали до body
let textSpan = document.querySelector("span");  // постукали до "span"
body.removeChild(textSpan);                     // видалили "span" з body
// textSpan.style.visibility = "hidden";