// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

$(document).ready(function () {
  let count = 0; 
  debugger                                                   // створюємо лічильник кліків по чекбоксам
  $("input[type='checkbox']").each(function () {                    // на кожен чекбокс додаємо дію клік
    $(this).on("click", function () {
      //console.log("click work");
      count++;
      //console.log(`Count ${count}`);
      if (count === 3) {                
        //console.log("Yes!");
        $("input[type='checkbox']").attr("disabled", "true");       // якщо клікнули по трьом чекбоксам, всі чекбокси стають неактивними
      }
    });
  });
});

