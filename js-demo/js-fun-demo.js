
// function arguments and return types 

// old JS 
function fun() {
    console.log("fun function");
    return 10;
}

fun();

// ES6 JS - arrow functions 

let fun2 = () => {
    console.log("fun2 function");
}

fun2();

let fun3 = () => console.log("Fun3");
fun3();

let fun4 = (num) => console.log(num);

fun4(10);

let fun5 = num => console.log(num);

fun3(15);
fun5(15);
fun5();




