
// Задача 1
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. 
// У модальному вікні необхідно послідовно вивести вміст:
//      1) першого елемента списку
//      2) останнього елемента списку
//      3) другого елемента списку
//      4) четвертого елемента списку
//      5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3


// Рішення 1
// let list = document.getElementById("list");
// let item = document.getElementsByTagName("li");

// function modalWind() {
//   let itemQueue = [0, 4, 1, 3, 2]; // вказали послідовність li; в такій послідовності будуть йти елемента в alert

//   let listItemText = " ";
//   for (let i = 0; i < itemQueue.length; i++) {  // проходимо по itemQueue для отримання індексу
//     let index = itemQueue[i];
//     if (index >= 0 && index < item.length) {    // перевіряємо індекс (повинен знаходитись в межах) та додаємо у itemQueue
//       listItemText += item[index].textContent;
//       if (i < itemQueue.length - 1) {
//         listItemText += ", ";                  // додали кому до кожного елементу, за виключенням останнього
//       }
//     }
//   }
//   alert(listItemText);                          // виводимо результат
//   console.log(listItemText);
// };

// modalWind();



// Рішення 2

// let list = document.getElementById("list");
// let item = document.getElementsByTagName("li");

// function modalWind() {
//   let itemQueue = [0, 4, 1, 3, 2];
//   const newList = itemQueue.map(i => item[i].textContent).join(", ")  //  робимо перебор за допомогою методу map і додаємо кому за жопомогою .join(", ")
//   alert(newList);
// };

//  modalWind();

