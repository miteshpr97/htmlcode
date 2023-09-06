// var num1=[],num2=[],operator=["add","subs","mul","div"];

// function add(num1,num2){
//     return num1+num2;
// }

// function subs(num1,num2){
//     return num1-num2;
// }

// function mul(num1,num2){
//     return num1*num2;
// }

// function div(num1,num2){
//     return num1/num2;
// }

// document.querySelector(".num7").addEventListener("click",num1.push(7));
// document.querySelector(".num8").addEventListener("click",num1.push(8));
// document.querySelector(".num9").addEventListener("click",num1.push(9));
// document.querySelector(".num4").addEventListener("click",num1.push(4));
// document.querySelector(".num5").addEventListener("click",num1.push(5));
// document.querySelector(".num6").addEventListener("click",num1.push(6));
// document.querySelector(".num1").addEventListener("click",num1.push(1));
// document.querySelector(".num2").addEventListener("click",num1.push(2));
// document.querySelector(".num3").addEventListener("click",num1.push(3));
// document.querySelector(".num0").addEventListener("click",num1.push(0));

// document.querySelector(".OPadd").addEventListener("click",add);
// document.querySelector(".OPsubs").addEventListener("click",subs);
// document.querySelector(".OPmul").addEventListener("click",mul);
// document.querySelector(".OPdiv").addEventListener("click",div);

// document.querySelector(".num7").addEventListener("click",num2.push(7));
// document.querySelector(".num8").addEventListener("click",num2.push(8));
// document.querySelector(".num9").addEventListener("click",num2.push(9));
// document.querySelector(".num4").addEventListener("click",num2.push(4));
// document.querySelector(".num5").addEventListener("click",num2.push(5));
// document.querySelector(".num6").addEventListener("click",num2.push(6));
// document.querySelector(".num1").addEventListener("click",num2.push(1));
// document.querySelector(".num2").addEventListener("click",num2.push(2));
// document.querySelector(".num3").addEventListener("click",num2.push(3));
// document.querySelector(".num0").addEventListener("click",num2.push(0));

// document.querySelector(".equal").addEventListener("click",)



// Variables to store the input numbers and the operator
let num1 = '';
let num2 = '';
let currentOperator = '';


function updateDisplay() {
  document.querySelector(".display").textContent = num1 + currentOperator + num2;
}


document.querySelectorAll(".btn.num1, .btn.num2, .btn.num3, .btn.num4, .btn.num5, .btn.num6, .btn.num7, .btn.num8, .btn.num9, .btn.num0").forEach(button => {
  button.addEventListener("click", () => {
    if (currentOperator === '') {
      num1 += button.value;
    } else {
      num2 += button.value;
    }
    updateDisplay();
  });
});

// Add click event listeners to operator buttons
document.querySelectorAll(".btn.OPadd, .btn.OPsubs, .btn.OPmul, .btn.OPdiv").forEach(button => {
  button.addEventListener("click", () => {
    if (num1 !== '') {
      currentOperator = button.textContent;
      updateDisplay();
    }
  });
});


document.querySelector(".btn.Clear").addEventListener("click", () => {
  num1 = '';
  num2 = '';
  currentOperator = '';
  updateDisplay();
});


document.querySelector(".btn.Equal").addEventListener("click", () => {
  if (num1 !== '' && num2 !== '') {

    switch (currentOperator) {
      case '+':
        num1 = String(parseFloat(num1) + parseFloat(num2));
        break;
      case '-':
        num1 = String(parseFloat(num1) - parseFloat(num2));
        break;
      case '*':
        num1 = String(parseFloat(num1) * parseFloat(num2));
        break;
      case '/':
        if (parseFloat(num2) !== 0) {
          num1 = String(parseFloat(num1) / parseFloat(num2));
        } else {
          num1 = 'Error';
        }
        break;
    }
    num2 = '';
    currentOperator = '';
    updateDisplay();
  }
});

// Initialize the display
updateDisplay();
