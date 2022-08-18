//task 1
console.log('#1');

function calcNum (numOne, numTwo, numThree) {
    let result = (numOne - numTwo) / numThree;
    console.log(result);
}
calcNum(20, 10, 2);


//task 2
console.log('#2');

function calcNum2 (numOne) {
    let cube = numOne ** 3;
    let square = numOne ** 2;
    console.log('Куб числа: ' + cube);
    console.log('Квадрат числа: ' + square);
}
calcNum2(3); 

//task 3 
console.log('#3');


function max (a, b) {
    let max = 0;
    if (a > b) {
        max = a;
    }else {
        max = b;
    }
    console.log('Наибольшее число: ' + max)
}

function min (a, b) {
    let min = 0;
    if (a < b) {
        min = a;
    }else {
        min = b;
    }
    console.log('Наименьшее число: ' + min)
}

max(3, 33);
min(266, 87);



//task 4
console.log('#4'); 

function createArray(array) { 
    array = []; 
    let i = 0;
    
    while (true) {
    let i = +prompt('Вводите числа');
    if (i == '') break;
    array.push(i);
    i++;
    }
    return array;   
    
}

let x = createArray();


function showArray() {  
    console.log(x);
}

showArray();



//task 5
console.log('#5'); 

num5 = +prompt('Введите целое число');

function isEven(num5){
    if (num5 % 2 == 0){
        return true;
    } else {
        return false;
    }
}

let result = isEven(10);

(result == true) ? console.log('четное') : console.log('нечетное');


//task 6
console.log('#6'); 

let arr = [2, 6, 8, 7, 3, 10, 20, 25];
let arr1 = [];

function checkNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i]) == true) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

checkNumber(arr);
console.log(arr1);


//task 7 
console.log('#7');

function createPyramid(rows) {
    var arr7 = [];
    var symbol;
    var str = '';

for (var i = 1; i <= rows; i++) { 
    str = '';
    for (var j = 1; j <= i; j++)  {
        //if (arguments.length > 1 || rows.length + symbol == rows.length + /^[\D]$/ || rows.length + symbol != rows.length + /^[\s]$/) str += symbol;  
        str += i;
        }
        console.log(str);
    }  
}
 

createPyramid(9);


//task 8
console.log('#8');

function createTriangle(h) {
h = +prompt('Введите высоту треугольника');
 let arr8 = []
 for (let i = 0; i < h; i++){
     let str = '';
     for (let j = 0; j < h - i; j++){
         str += ' '; 
     }
     let p = ''; 
     for (let k = 0; k < i * 2 - 1; k++){
         p += '^'
     }
     arr8.push(str + p + str);
 }
console.log(arr8);

 for (let elem of arr8){
     console.log(elem);
 }

}

createTriangle();


//task 9 
console.log('#9');

function calcNumber9() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        arr[0] = 0;
        arr[1] = 1;
        let a = 0;
        a = arr[i] + arr[i + 1];
        if (a >= 1000) break;
        arr.push(a);
    }
    console.log(arr);
}

calcNumber9();

//task 10
console.log('#10');

{
    let i = 0;
function calcNumber10(num10) {

    let string = '' + num10;
    let sum = 0;
    for(; i < string.length; i++) sum += +string[i];
    if (sum > 9) calcNumber10(num10);
    console.log(sum);
}

calcNumber10(123); 

}


//task 11
console.log('#11');

{
  function showArray(array) {
    
    console.log(array[i]);
    i++;
    if (i < array.length) showArray(array);
}
var i = 0;

showArray([2, 3, 77, 66, 543, 890, 44]);  
}


//task 12  вообще хз как сделать :/
console.log('#12');

/*
    let name = 'Иванов Иван Иванович',
    group = 'W4017',
    rows = 5,

    str = '',
    arr12 = [];

    function frame(length) {
        for (i == 0; i <= arr12.length; i++) {
                str += '*';
            }
            console.log(str);
    }
   

    arr12.push("Домашняя работа \"Функции\"");
    arr12.push("Выполнил студент гр.");
    arr12.push('Иванов Иван Иванович');

    var frameLength = 0;
    for(var i = 0; i < arr12.length; i++) {
        if (frameLength < arr12[i].length) {
            frameLength = arr12[i].length;
        }
    }

    frameLength += 2;
    frame(frameLength);
    for (var i = 0; i < arr12.length; i++) {
        var resultString = "*";
        for (var j = 0; j < frameLength; j++) {
            if (arr12[i][j] === undefined) {
                if (j === frameLength - 2){
                    resultString += "*";
                }else{
                    resultString += ' ';
                }

                }else{
                    resultString += arr12[i][j];
            }
        }
        console.log(resultString);
    }
    frame(frameLength);

*/

//task 13
console.log('#13');


let email;
function checkEmail(email) {
    var re = /^[a-z]{1}[\w-\.]*@[\w-]+\.[a-z]{2,11}$/i;

    var valid = re.test(email);
    if (valid) console.log('Адрес электронной почты введен правильно!');
    else console.log('Адрес электронной почты введен неправильно!');
    return valid;
}

checkEmail(prompt('Введите email'));

