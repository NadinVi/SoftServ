// Урок 4
// Задача 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) 
// – порядкові номери елементів масиву, які необхідно скласти. 
// Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, 
// якщо були введені не числа, і коли одне з чисел або обидва більшого розміру за довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// let arr = [3, 5, 8, 2, 7];
// let first = 3;
// let second = 1;

// Рішення
// function sumSliceArray(arr, first, second) {
//     try {
//         let summ = arr[first] + arr[second];
//         // перевірка чи введено число
//         if (typeof first !== "number" || typeof first !== "number") {
//                 throw new Error("Enter the number!");
//             };
//         // перевірка аби введені числа не були більше за довдину масиву
//         if (first < 0 || first > arr.length || second < 0 || second > arr.length) {
//             throw new Error(`Enter a number from 0 to ${arr.length}!`);
//         }
//         return summ;
//     } catch (error) {
//         return error.message;
//     }
// };


// Рішення)
// function sumSliceArray(arr, first, second) {
//     try {
//         let summ = arr[first] + arr[second];
//         // перевірка чи введено число
//         // if(!Number.isInteger(first) || !Number.isInteger(second)) {
//         //         throw new Error("Enter the number!");
//         //     };
//         //перевірка аби введені числа не були більше за довдину масиву
//         if (first < 0 || first > arr.length || second < 0 || second > arr.length) {
//             throw new Error(`Enter a number from 0 to ${arr.length}!`);
//         }
//         return summ;
//     } catch (error) {
//         return error.message;
//     }
// };

//console.log(sumSliceArray(arr, first, second));


// Задача 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) 
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age 
//з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
//в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. 
//У блоці catch передбачена можливість виведення назви та опису помилки.


// Рішення
// function checkAge() {
//     try {
//         let name = prompt("Enter your name");
//         // перевірка на пусте поле
//         if (name == "") {
//             throw new Error("The field is empty!");
//         }

//         let age = prompt("Enter your age");
//         // перевірка на возраст
//         if (age < 18 || age > 70) {
//             throw new RangeError("Your age is not allowed to watch the movie");
//         }
//         // перевірка на пусте поле
//         if (age == "") {
//             throw new Error("The field is empty!");
//         }
//         // перевірка на нечислове значення у поле "вік"
//         if (isNaN(Number(age))) {
//             throw new Error("You entered the wrong age. Age is entered as a number");
//         }

//         let status = (prompt("Enter your status")).toLowerCase();;
//         // перевірка на пусте поле
//         if (status == "") {
//             throw new Error("The field is empty!");
//         }
//         // перевірка на статус
//         if (status !== "admin" && status !== "moderator" && status !== "user") {
//             throw new EvalError("Please indicate your status: admin, moderator, user");
//         }

//         alert("You have access to watch the movie")
//     } catch (error) {
//         alert(`${error.name}: ${error.message}`);
//         console.log(`${error.name} ${error.message}`);
//     }
// }
// checkAge();

// Задача 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height
// і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, 
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

// Рішення
// let width = "d";
// let height = 3;
// let area = null;
// function calcRectangleArea(width, height) {
//     try {
//         // перевірка чи було введено число 
//         if (typeof width !== "number" || typeof height !== "number") {
//             throw new Error("Enter the number!");
//         }
//         // перевірка чи не було введене від'ємне число
//         if(width < 0 || height < 0) {
//             throw new Error("You have entered a negative number. Please enter a positive number!")
//         }
//     } catch (error) {
//         return console.log(error.name, error.message);
//     } return area = width * height;
// };
// console.log(calcRectangleArea(width, height));




// Задача 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця 
// відповідно до введеного номера місяця. У випадку некоректного вводу 
// кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number


// Рішення
//  class MonthException {
//         constructor(message) {
//             this.message = message;
//             this.name = "MonthException";
//         }
//     };

//     function showMonthName(month) {
//         const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         try{
//         if(month < 1 || month > 12) {
//             throw new MonthException("Incorrect month number")
//         } return  console.log(allMonths[month - 1]);
//     } catch (error) {
//         return console.log(error.name, error.message);
//     }
//     };

//     (showMonthName(14)); // Incorrect month number
//     (showMonthName(4)); // April
//     (showMonthName(0)); 
//     (showMonthName(8)); 



// Задача 5.
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням
// функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить
// повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

// Рішення
// function showUser(id) {
//     let idObj = { id };
//     if (id < 0) {
//         throw new Error(`Error: ID must not be negative: ${id}`)
//     }
//     return idObj;
// };

// function showUsers(ids) {
//     let idArr = [];
//     for (const id of ids) {
//         try {
//             idArr.push(showUser(id));
//         }
//         catch (error) {
//             console.log(`${error.name}! ${error.message}`)
//         }
//     }
//     return idArr;
// };

// console.log(showUsers([7, -12, 44, 22]));


// Рішення
// function showUsers(ids) {
//     function showUser(id) {
//         let idObj = { id };
//         if (id < 0) {
//             throw new Error(`Error: ID must not be negative: ${id}`)
//         }
//         return idObj;
//     };

//     let idArr = [];
//     for (const id of ids) {
//         try {
//             idArr.push(showUser(id));
//         }
//         catch (error) {
//             console.log(`${error.name}! ${error.message}`)
//         }
//     }
//     return idArr;
// };

// console.log(showUsers([7, -12, 44, 22]));
// console.log(showUsers([-7, 12, 44, -22])); // Error! Error: ID must not be negative: -7
//                                            // Error! Error: ID must not be negative: -22
//                                            // [{id: 12}, {id 44}]