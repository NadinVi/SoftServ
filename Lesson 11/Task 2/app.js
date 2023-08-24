// Implement a function calcArrProduct(arr) that takes an array of numbers. 
// Function should return a Promise which being resolved with the product of the array elements, 
// if they are of type Numbers, or rejected with the message "Error! Incorrect array!" if at least 1 element of the array 
// is not a number.

// Реализовать функцию calcArrProduct(arr), которая принимает массив чисел.
// Функция должна возвращать обещание, которое разрешается произведением элементов массива,
// если они имеют тип Numbers, или отклонены с сообщением "Ошибка! Неверный массив!" если хотя бы 1 элемент массива
// это не число.
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    if (arr.some((el) => typeof el !== "number"))
      reject("Error! Incorrect array!");
    let product = arr.reduce(
      (prevValue, currentValue) => prevValue * currentValue,
      1
    );
    resolve(product);
  });
}

const randomValue = Math.floor(Math.random() * 10) + 1;
calcArrProduct([1, 2, 3])
  .then((product) => {
    console.log(product);
    return calcArrProduct([1, 20, randomValue, 0.5]);
  })
  .then((product) => {
    console.log(product === randomValue * 10);
    return calcArrProduct([5, "user2", 7, 12]);
  })
  .then((product) => {
    console.log(product);
  })
  .catch((error) => console.log(error));