// Implement a function getPromise(message, delay) that takes a text message and an integer delay value (in ms). 
// Function should return a Promise that waits a given amount of time (using the delay argument) and being resolved with a message.

// For example:
// Test	
// getPromise("test promise", 200).then((data)=> {
//     console.log(data);       // test promise
// })

// Реализуйте функцию getPromise(message, delay), которая принимает текстовое сообщение и целочисленное значение задержки (в мс). 
// Функция должна возвращать обещание, которое ожидает заданное количество времени (используя аргумент задержки) и 
// разрешается с сообщением.

function getPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), delay)
  });
};
console.log(getPromise("Hello world!", 500));

getPromise("test promise", 200).then((data) => {
  console.log(data);
})