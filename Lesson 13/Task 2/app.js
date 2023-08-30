// На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), 
// в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, 
// завантажується файл books.json і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.
const download = document.querySelector(".download");
const booksAutors = document.querySelector(".booksAutors");
// console.log(download);
// console.log(booksAutors);

download.addEventListener("click", () => {
    fetch("books.json")
    .then(result => result.json())
    .then(data => {
        data.authors.forEach(author => {
            booksAutors.innerHTML += `<li>${author}</li>`;
        })
    })
});
