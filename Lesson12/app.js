// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
// тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
// поточну робочу директорію і назву файлу сервера (використати модуль path).


const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("hello");

    response.end();
}).listen(5000);

console.log("Server is listening on port http://localhost:5000");