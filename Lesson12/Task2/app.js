// Необхідно створити власний модуль personalmodule.js, який містить функцію, 
// що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера.
// Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
//         Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

const http = require('http');
const personalGreeting = require('./personalmodule');

    http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let userName = "Nadiia"

    response.write(`<p>Date of request: ${personalGreeting.timeIsNow}</p>`)
    response.write(`<p>${personalGreeting.messegeGreenting(userName)}</p>`)
  
    response.end();
  }).listen(5000);

  console.log("Server of Task2 is listening on port http://localhost:5000");