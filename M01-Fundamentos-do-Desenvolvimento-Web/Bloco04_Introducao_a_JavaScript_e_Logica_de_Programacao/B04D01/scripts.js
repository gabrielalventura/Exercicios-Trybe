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
if (notaCandidato >= 80){
  console.log("Parabéns, você foi aprovada(o)!");
}
else if (notaCandidato < 80 && notaCandidato >= 60){
  console.log("Você está na nossa lista de espera");
}
else{
  console.log("Você foi reprovada(o)");
}