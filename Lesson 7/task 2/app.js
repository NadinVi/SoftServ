// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
//         <button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і 
// змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, 
// шрифт сімейства "Comic Sans MS".

const button = document.querySelector("div button");
button.addEventListener('click', function changeCSS() {
    const p = document.getElementById("text");

    p.style.color = "orange";
    p.style.fontSize = "20px";
    p.style.fontFamily = "Comic Sans MS";
})
