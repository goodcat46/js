// ? Використовуючи prompt задайте питання, на яке можна відповісти "так" чи "ні"
// ? Випадкове число для відповіді генерується функцією Math.floor(Math.random() * 5)
// ? Використовуйте switch для створення випадкових відповідей, де:
// ? 0 - 'Все будет ОК'
// ? 1 - 'Може так, а може ні'
// ? 2 - 'Певно, ні'
// ? 3 - 'Дуже ймовірно'
// ? def - 'Я нічого про цк не знаю'
// ? Вивести відповідь із запитанням ("Поставлене запитання - question.
// ?  Шар думає, що - answer")

let i = "";
for (i = 0; i <= 10; i = i) {
  let question = prompt(
    "Запитай мене щось. P.S. Лише питання закритого типу тварюко!))"
  );
  let answer = "";
  const random = Math.floor(Math.random() * 6);
  switch (random) {
    case 0:
      answer = "Донт ворі бі хеппі";
      break;
    case 1:
      answer = "Ну такоЕ!";
      break;
    case 2:
      answer = "Я краще змовчу";
      break;
    case 3:
      answer = `"До поки сонце сяєє, до поки ....." ну далі ти знаєш`;
      break;
    case 4:
      answer = `"Я зеленого поняття не маю про що мова =)`;
      break;
  
    default:
      answer = "Перезавантаж сторінку скотиняко, будь ласка";
      break;
  }
  alert(
    `Поставлене запитання - ${question}. Мольфар Єфродозій віщає що - ${answer}`
  );

}
