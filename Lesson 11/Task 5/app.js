// We have arrays delays of delays in ms. Show in console numbers from 0 to delays.length-1 with 
// corresponding dalay BUT show numbers in correct turn. It means that first you need show 0 after delay delays[0] 
// then show 1 after additional delay delays[1] and so on. Use function delay for creating of Promises in your solution

// Имеем массивы задержек задержек в мс. Показать в консоли номера от 0 до delays.length-1 с
// соответствующий день, НО показывать числа в правильном порядке. Это означает, что сначала вам нужно 
// показать 0 после задержки delays[0]
// затем показать 1 после дополнительной задержки delays[1] и так далее. Используйте задержку функции 
// для создания промисов в вашем решении

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
  for (let i in delays) {
    console.log(await delay(i, delays[i]));
  }
};
