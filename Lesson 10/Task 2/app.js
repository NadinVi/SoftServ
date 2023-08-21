// You have object data with two properties names and ages.
// names and ages ara arrays with 3 elements in each. 
// Using destructuring assignment save in variables age1, age2, age3, name1, name2, name3 all values from data object.

// У вас є дані об’єкта з двома назвами властивостей і віком.
// імена та вікові масиви ara з 3 елементами в кожному.
// Використовуючи присвоєння деструктуризації, збережіть у змінних age1, age2, age3, name1, name2, name3 усі значення з об’єкта даних.

Рішення
const data = {
    names: [ 'Sam', 'Tom', 'Ray', 'Bob' ], 
    ages: [ 20, 24, 22, 26 ] 
}

 let { names: [name1, name2, name3], ages: [ age1, age2, age3 ] } = data;

// console.log(data);
// console.log(name1);
// console.log(name2);
// console.log(name3);
