
var array1 = [];
number1 = 0;
number2 = 0;
operator = "add";


function btnPress(number) {
    array1.push(number);

    var value = "";
    for (var i = 0; i < array1.length; i++) {
        value+=array1[i];
    }

    answer = document.getElementById('answer');
    answer.innerHTML = value;
    number1 = parseFloat(value);
    return value;
    document.write(number1);
}

function add(){
    operator = add;
    reset();
}

function subtract(){
    operator = subtract;
    reset();
}

function multiply(){
    operator = multiply;
    reset();
}

function divide(){
    operator = divide;
    reset();
}

function reset(){
    number2 = number1;
    number1=0;
    array1.length = 0;
}

function calc(){
    if (operator==add) {
        number1=number2+number1;
    }
    else if (operator==subtract){
        number1=number2-number1;
    }
    else if (operator==multiply){
        number1=number2*number1;
    }
    else if (operator==divide){
        number1=number2/number1;
    }

    answer = document.getElementById('answer');
    answer.innerHTML = number1;

    number2=0;
    array1.length = 0;


}

function erase(){
    number1 = 0;
    number2 = 0;
    array1.length = 0;
    answer = document.getElementById('answer');
    answer.innerHTML = 0;

}
