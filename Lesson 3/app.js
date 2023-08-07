// Урок 3. 
// Задача 1 
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

// Рішення 
// const arr = [5, 3, 4, 5, 6, 7, 3];

// function compact(arr) {
//   const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
//     return newArr;
// }
// console.log(compact(arr));

// Рішення
// function compact(arr) {
//     const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
//       return newArr;
//   }

// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]



// Задача 2
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
// початкове значення
// кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

// Рішення
// let arr = [];
// function createArray(start, end) {
//     for(let i = start; i <= end; i ++) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(createArray(2, 9));



// Задача 3
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, 
// число а+1 - два рази і т.д.

//Рішення
function outputNumber(a, b) {
    let count = 1;
    for ( let i = a; i <= b; i ++) {
        for(let k = 1; k <= count; k++) {
                console.log(i);
        } count ++;
    }   
};

outputNumber(2, 6)


// Задача 4
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]

// Рішення
// function randArray(k) {
//     let arr = [];
// for(let i = 1; i <= k; i++) {
//   arr.push(Math.floor(Math.random() * (500 + 1 - 1)) + 1);
// } 
//   return arr;
// };

// console.log(randArray(5));


// Задача 5
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних 
// (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
//  /* 
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ] 


//В цій залачі поки дішла до розподілу по різним масивам String та Number. Але, поки не зрозуміла як це рішення додати до функціі 
// та як вірно зайти у вкладени масив і звідти витягнути потрібні дані по масивам
// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// const arrNum = [];
// const arrStr = [];

//     for(let i = 0; i <= arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//            console.log(arrNum.push(arr[i]));
//         } else if (typeof arr[i] === 'string') {
//             console.log(arrStr.push(arr[i]));
//         }
//     };
// День не знаю який, коли намагаюсь зробити задачу і от завдяки підказкам у чаті я прийшла до таких кроків 
// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// let ownArr = arr.flat();
// console.log(ownArr);


// Це я писала код без функції
// let arrNum = [];
// let arrStr = [];

// for(let i = 0; i <= ownArr.length; i++) {
//           if (typeof ownArr[i] === 'number') {
//              (arrNum.push(ownArr[i]));
//           } else if (typeof ownArr[i] === 'string') {
//               (arrStr.push(ownArr[i]));
//           }
//       };
//       console.log(arrNum);
//       console.log(arrStr);

// Рішення. Вибач, що дуже банато пишу, але дуже хочу такі задачі покроково для себе занотувати. Сподіваюсь в мене вийшло.
// А це вже код з функцією. 
// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// let ownArr = arr.flat();
// console.log(ownArr);
// function funcName(ownArr) {
//   let arrNum = [];
//   let arrStr = [];

//   for(let i = 0; i <= ownArr.length; i++) {
//             if (typeof ownArr[i] === 'number') {
//               (arrNum.push(ownArr[i]));
//             } else if (typeof ownArr[i] === 'string') {
//               (arrStr.push(ownArr[i]));
//             }
//         }
//         return [arrNum, arrStr];
// }

// console.log(funcName(ownArr));



// Задача 6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

// Рішення 
// function calc(a, b, op) {
//   switch (op) {
//     case 1:
//       return a - b;
//       break;
//     case 2:
//       return a * b;
//       break;
//     case 3:
//       return a / b;
//       break;
//     default: a + b;
//   }
// };

// console.log(calc(2, 5, 2));

// Рішення
// function calc(a, b, op) {
//   if(op == 1) {
//     return a - b; 
//   } else if (op == 2) {
//     return a * b;
//   } else if (op == 3) {
//     return a / b;
//   } else {
//     return a + b;
//   }
// }

// console.log(calc(2, 5, 2));




// Задача 7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
//let arr = [1, 2, 3, 5, 11];


// Рішення
// let arr = [1, 2, 3, 5, 3];

// function findUnique(arr) {
//     const newArr = new Set(arr);
//     //console.log(newArr);
//     return newArr.size === arr.length;
// };

// console.log(findUnique(arr));


// Рішення
// let arr = [1, 2, 3, 5, 3];
// function findUnique(arr) {
//     return arr.some(item => arr.indexOf(item) !== arr.lastIndexOf(item));
// }

// if (findUnique(arr)) {
//     console.log(false);
// }
// else {
//     console.log(true);
// };