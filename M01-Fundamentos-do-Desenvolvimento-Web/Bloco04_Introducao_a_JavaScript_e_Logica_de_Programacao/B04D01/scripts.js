const myName = "Gabriela";
const birthCity = "Belo Horizonte";
let birthYear = 1995;
console.log(myName);
console.log(birthCity);
console.log(birthYear);
birthYear = 2030;
console.log(birthYear);
// fim do exercicio de fixação 1
// inicio do exercicio de fixação 2
const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = base + height + base + height;
console.log(perimeter);
// fim do exercicio de fixação 2
// inicio do exercicio de fixação 3
const notaCandidato = 75;
if (notaCandidato >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
}
else if (notaCandidato < 80 && notaCandidato >= 60) {
  console.log("Você está na nossa lista de espera");
}
else {
  console.log("Você foi reprovada(o)");
}
// fim do exercicio de fixação 3
// inicio do exercicio de fixação 4
const currentHour = 7;
let message = "";
if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de domir";
}
else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!"
}
else {
  message = "Hmmm, cheiro de café recém passado"
}
console.log(message);
// fim do exercicio de fixação 4
// inicio do exercicio de fixação 5
let weekDay = "sábado";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else {
  console.log("FINALMENTE, descanso merecido UwU.")
}
// fim do exercicio de fixação 5
// inicio do fim do exercicio de fixação 6
let pessoaCandidata = 'lista';
switch (pessoaCandidata) {
  case 'aprovada': console.log("Parabéns, você foi aprovada(o)!");
    break;
  case 'lista': console.log("Você está na nossa lista de espera");
    break;
  case 'reprovada': console.log("Você foi reprovada(o)");
    break;
  default: console.log("não se aplica.");
}

