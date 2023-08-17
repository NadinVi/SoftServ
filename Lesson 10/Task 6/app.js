// Write funtion "mapBuilder (keysArray, valuesArrays)", which obtain two arrays of the same length. 
// Using these arrays, the function must create an object of type "Map", 
// the keys of which are the values from the first array, and the Map values are values from the second array. 
// After that, the function returns this Map object.

// Напишіть функцію "mapBuilder (keysArray, valuesArrays)", яка отримає два масиви однакової довжини. 
// Використовуючи ці масиви, функція повинна створити об’єкт типу «Map», ключами якого є значення з першого масиву, 
// а значеннями Map – значення з другого масиву. Після цього функція повертає цей об’єкт Map.


// Рішення
function mapBuilder(arr1, arr2) {
    let map = new Map();
        for(let i = 1; i <= arr1.length; i++) {
            map.set(arr1[i], arr2[i])
        }
        return map;
    };

    	
let map = mapBuilder([1, 2, 3, 4], ["div", "span", "b", "i"]);
console.log(map.size);