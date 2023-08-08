// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з 
// відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
const body = document.body;
const main = document.createElement("main");
main.className = "mainClass";

let buttonBlue = document.createElement("button");
buttonBlue.id = "blue";
buttonBlue.innerText = "Blue page";

let buttonPink = document.createElement("button");
buttonPink.id = "pink";
buttonPink.innerText = "Pink page";

let buttonBrown = document.createElement("button");
buttonBrown.id = "brown";
buttonBrown.innerText = "Brown page";

let link = document.createElement("a");
link.id = "textLink";
link.href = "#";
link.innerText = "Yellow page";

main.append(buttonBlue);
main.append(buttonPink);
main.append(buttonBrown);
main.append(link);
body.append(main);


buttonBlue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue"
});

buttonPink.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "pink"
});



buttonBrown.addEventListener("mousedown", () => {
    document.body.style.backgroundColor = "brown"
});

buttonBrown.addEventListener("mouseup", () => {
    document.body.style.backgroundColor = "white"
});


link.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "yellow"
});

link.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "white"
});


