// Реалізуйте програму, яка по натисканню на кнопку видалятиме 
// обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

const listName = document.getElementById("listName"); // постукали до listName
const button = document.getElementById("delete"); // постукали до кнопки delete

button.addEventListener("click", () => {                            // додали дію до button
    const selectedItem = listName.options[listName.selectedIndex];  // отримуємо обраній елемент (зі списку)
    if (selectedItem) {
        selectedItem.remove();                                      // видаляємо елемент
    }
});
