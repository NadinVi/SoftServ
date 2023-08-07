// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const register = document.getElementsByClassName("btn")[0];   // постукали до btn
let containerUs = document.getElementsByClassName("out")[0];  // постукали до out

let users = [];

function renderUsers(users) {                                //  рендер юзеров до масиву TRs
    const TRs = [];

    for (let key in users) {                                  // поєднуємо всі дані юзера у одну строку т
        TRs.push(`<tr>
         <td>${users[key]}</td>
         </tr>`)
    }

    containerUs.innerHTML = `<table>${TRs.join("")}</table>` // додаєм дані юзера до "out"
};

register.addEventListener("click", () => {                      // встановлюємо дію "click" на "btn". При натисканні на кнопку починає 
    createUser();                                               // працювати createUser()
});

function createUser() {                                              //  постучали до кожного потрібного елементу і записали їх у newUser ( users.push(newUser);)
    const user = document.getElementsByName("fio")[0].value;
    const userPhone = document.getElementsByName("phone")[0].value;
    const birthday = document.getElementsByName("birthday")[0].value;
    const email = document.getElementsByName("email")[0].value;

    const newUser = [user, userPhone, birthday, email];

    console.log(newUser);
    users.push(newUser);
    renderUsers(newUser);
};




// Рішення. Вивести просто в строку
// const register = document.getElementsByClassName("btn")[0];
// let containerUs = document.getElementsByClassName("out")[0];
// let users = [];

// function renderUsers(users) {
//     const items = users.map(user => user.join(", "));
//     containerUs.innerHTML = items.join("");
// };

// register.addEventListener("click", () => {
//     createUser();
// });

// function createUser() {
//     const user = document.querySelector('input[name="fio"]').value;
//     const userPhone = document.querySelector('input[name="phone"]').value;
//     const birthday = document.querySelector('input[name="birthday"]').value;
//     const email = document.querySelector('input[name="email"]').value;

//     const newUser = [user, userPhone, birthday, email];

//     console.log(newUser);
//     users.push(newUser);
//     renderUsers(users);
// };


