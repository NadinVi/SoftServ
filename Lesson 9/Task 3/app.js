// Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>

$(document).ready(function() {
    $("h3").each(function() {                       // перебираємо всі h3 та знаходимо div після  h3
        let h3 = $(this);
        let div = h3.next("div");
        div.insertBefore(h3);                       // преставялємо div перед h3
    });
});
