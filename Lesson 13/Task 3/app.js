// Використати сервіс 
// https://randomuser.me/
// Та при кожному завантаженні сторінки робити запит до API та 
// рендерити базову інформацію про користувача (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).

document.addEventListener("DOMContentLoaded", function () {
    renderUserInfo();
    const userContainer = document.querySelector(".user_container");
    // функція, де ми отримуємо дані рандомного юзера
    function renderUserInfo() {
        fetch('https://randomuser.me/api/')
            .then(result => result.json())
            .then(data => {
                //console.log(data);
                const user = data.results[0];
                console.log(user);
                userContainer.innerHTML = `
                <img src="${user.picture.medium}" alt="avatar">
                <p>User name: ${user.name.first}</p>
                <p>User age: ${user.dob.age}</p>
                <p>Gender: ${user.gender}</p>
                <p>Country: ${user.location.country}</p>
                <p>User login: ${user.login.username}</p>
                <p>User password: ${user.login.password}</p>
                <p>User email:${user.dob.email}</p>
                `
            })
    }
});
