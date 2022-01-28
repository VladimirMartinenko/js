/*let test1 = 30
let test2 = 10
console.log(test1/test2);
console.log(test1%test2);
console.log(test1**test2);

let num = 1;
num+=5;
num-=3;
num*=3;
num/=2;*/
/*const username = prompt('name');
alert('hello '+ username)*/

/*const first = function() {
  const input1 = prompt('Enter name');
  const input2 = prompt('Вы уже уходите');
  
  
  if(input2==="da"){
    alert(input1+' пока')
  } else {alert(input1+' привет')}
}
first()*/

/*const examination = function(number) {
if (number % 2 === 0){
  return ('honest')}
else{return 'odd'}
}
const result = examination (9);
console.log(result);*/

/*const smallest = function(number1,number2) {
if (number1 < number2){
  return (number1)}
else{return number2}
}
const result = smallest (3,5);
console.log(result);*/

/*const price = function(number1,number2) {
if (number1 === number2){
  return (true)}
}
const result = price (5,5);
console.log(result);*/




/*const meaning = prompt('введите + - * /');
const number1 = +prompt('введите первую цыфру');
const number2 = +prompt('введите вторую цыфру');
switch (meaning){
  case '+' : {
    alert (number1+number2);
    break
  }
  case '-' : {
    alert (number1-number2);
    break
  }
  case '*' : {
    alert (number1*number2);
    break
  }
  case '/' : {
    alert (number1/number2);
    break
  }
  default : {
    alert ('введите корректные данные')
  }
}*/


/*const color = prompt("введите цвет");
if (color === "красный") {
  console.log("стой");
} else if (color === "жёлтый") {
  console.log("приготовится");
} else {
  console.log("иди");
}*/


const isSeason = function(month) {
   if(month >= 1 && month <=2 && month === 12){
    return ('winter')
  }
   else if(month >= 3 && month <=5){
    return ('spring')
  }
  else if(month >=6 && month <=8){
    return ('summer')
  }
  else if(month >=9 && month <=11){
    return ('autumm')
  }
  else {
    return ('enter a valid value')
  }
}
const meaning = +prompt('введите месяц цыфрами');
const result = isSeason(meaning);
console.log(result);