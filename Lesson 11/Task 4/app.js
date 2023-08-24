// We have arrays delays of delays in ms. Show in console numbers from 0 to delays.length-1 with corresponding dalay. 
// Use function delay for creating of Promises in your solution


// Имеем массивы задержек задержек в мс. Показать в консоли номера от 0 до delays.length-1 с соответствующим dalay.
// Используйте задержку функции для создания промисов в вашем решении

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
delays.forEach((d, i) => {
  delay(i, d).then((data) => {
    console.log(data);
  })
});
