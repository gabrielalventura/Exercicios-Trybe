//Arrays - Exercicío 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercicío 2
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercicío 3
menu.push('Contato');
console.log(menu);

//For - Exercicío 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for( let index =0; index < groceryList.length; index+= 1){
  console.log(groceryList[index]);
}
// For/of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names){
  console.log(name);
}