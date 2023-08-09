// На сторінці потрібно реалізувати 2 випадаючих списки. 
// У першому містяться назви країн, у другому – назви міст. 
// Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку 
// певна країна - в правому випадаючому  списку з'являлися міста цієї країни. 
// Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>
                    
// <select name="cities" id="cities"></select>
// <p></p>


const country = document.getElementById("country"); // постукали до country
const cities = document.getElementById("cities");   // постукали до cities
const render = document.querySelector("p");         // постукали до p

// створили об'єкт з переліком міст до країн
const citiesList = {                                
    ger: ["Leipzig", "Hannover", "Berlin", "Hamburg"],
    usa: ["Dallas", "Tacoma", "Boston", "Columbia"],
    ukr: ["Zaporizhia", "Kyiv", "Mykolaiv", "Chuguev"],
}

// вибірка міст
function citiesInfo() {                                         
    const countrySelect = country.value;
    cities.innerHTML = '';

    if (citiesList[countrySelect]) {
        citiesList[countrySelect].forEach(city => {
            let detailCity = document.createElement("option");
            detailCity.value = city;
            detailCity.textContent = city;
            cities.appendChild(detailCity);
        });
    }
}

citiesInfo();

// рендер країни до p
country.addEventListener("change", (event) => {   
    citiesInfo();              
    render.innerHTML = `Country: ${country.options[country.selectedIndex].text} City: ${cities.options[cities.selectedIndex].text}`;
});

// рендер міста до p
cities.addEventListener("change", (event) => {  
    render.innerHTML = `Country: ${country.options[country.selectedIndex].text} City: ${cities.options[cities.selectedIndex].text}`     
});
