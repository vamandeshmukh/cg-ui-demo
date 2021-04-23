
console.log("Start");

// let fun = (arg) => { 
//     arg();
// };

// let anotherFun = () => {
//     console.log("another function ");
// };

//     setTimeout(anotherFun, 3000);

// fun(anotherFun);

// callback problem 

// const fun = () => {
//     setTimeout(() => {
//             return { num: 10 };
//         }
//         , 3000);
// };

// const funCall = fun();

// console.log(funCall.num);

// 1. solution with callback 

// 

const fun = (arg2) => {
    setTimeout(
        () => {
            arg2({ num: 10 });
        }
        , 3000);
};

fun((funCall) => {
    console.log(funCall.num);
});

console.log("End");




function sumAsync(a, b, callback) {
    console.log("x");
    setTimeout(function () {
        console.log("y");
        var result = a + b; // http://localhost:8090/Employee 
        callback(result);
    }, 2000);
}

function logSum(result) {
    console.log("z");
    console.log(result);
}

sumAsync(1, 2, logSum);

