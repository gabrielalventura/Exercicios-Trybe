let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//exercicío 1
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
//exercicío 2
let sumOfAll = 0;
for(let index = 0; index < numbers.length; index += 1){
  sumOfAll += numbers[index];
}
console.log(sumOfAll);
//exercicio 3
let media = sumOfAll/numbers.length;
console.log(media);
//exercício 4
if(media > 20){
  console.log('valor maior que 20.');
}else{
  console.log('valor menor ou igual a 20');
}
//exercicío 5
let highNumber = 0;
for(index = 0; index < numbers.length; index +=1){
  if(highNumber < numbers[index]){
    highNumber = numbers[index];
  }
}
console.log(highNumber);
//exercicio 6
