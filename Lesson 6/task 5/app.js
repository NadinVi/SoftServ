/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/

const circle = document.querySelectorAll(".circle"); // 1)
//console.log(circle);

for (let i = 0; i < circle.length; i++) {                               // 2
    circle[i].className += " " + circle[i].getAttribute("data-anim");   // 3
};

let animation = document.querySelector(".circle");                          // 4
animation.onanimationstart = () => {
    console.log("Animation started");
};

// або
// animation.addEventListener("animationstart", () => {
//     //console.log("Animation started");
// }
// );
