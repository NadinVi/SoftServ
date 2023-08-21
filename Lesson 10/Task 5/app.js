// Using the code below, an array is created using a loop, and three functions are written to the array. 
// The logic of the functions is simple, the counter value at the time of creation of the function is output to the console.
// The code looks logical, but if you run this code without changes, the number 3 will be output to the console in all function calls.
// Using the closure mechanism, modify the code to output the correct numbers.
// It is possible solve this problem by replacing var to let, but in this task the keyword let is not allowed.

// За допомогою наведеного нижче коду створюється масив за допомогою циклу, і в масив записуються три функції. 
// Логіка роботи функцій проста, значення лічильника в момент створення функції виводиться на консоль.
// Код виглядає логічно, але якщо запустити цей код без змін, число 3 буде виводитися на консоль у всіх викликах функцій.
// Використовуючи механізм закриття, змініть код, щоб вивести правильні числа.
// Цю проблему можна вирішити, замінивши var на let, але в цьому завданні ключове слово let не допускається.


// Рішення
var arr = [];



for (var i = 0; i <= 2; i++) {
    (function(el) {                         // Створюємо анонімну функцію, яка одразу викликається
      arr[el] = function () {               // Тепер ми отримаємо поточне значення `el`, яке буде збережено у замиканні
        console.log(el);
      };
    })(i);                                  // Передаємо поточне значення `i` в анонімну функцію
  }

arr[0]();
arr[2]();
