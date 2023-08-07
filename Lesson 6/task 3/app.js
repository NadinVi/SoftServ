let body = document.body;     // постукаи до body

let main = document.createElement("main"); // створили "main"
main.className = "mainClass check item";   // додали до "main" класс ім'я


let div = document.createElement("div");  // створили "div"
div.id = "myDiv";                         // додали до "div" id


let paragraph = document.createElement("p");  // створили "p"
paragraph.innerText = "First paragraph";      // додали до "p" текст

div.append(paragraph);  // додали paragraph до div
main.append(div);       // додали div до main 
body.append(main);      // додали main до body