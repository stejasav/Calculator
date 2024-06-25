let calculation= localStorage.getItem('calc') || '';

Display();

function updateCalculation(value){
  calculation += value;
  // console.log(calculation);
  Display();
  localStorage.setItem('calc', calculation);
}

function Display(){
  document.querySelector('.js-calculation').innerHTML = calculation || '0';
}