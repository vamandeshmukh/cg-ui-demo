
// function sum(...theArgs) {
//     console.log(theArgs);
//     return theArgs.reduce((total, next) => {
//         console.log(total + " t");
//         console.log(next + " n");
//       return total + next;
//     });
//   }
 
//   console.log(sum(1, 2));
//   // expected output: 3
  
//   console.log(sum(1, 2, 3));
//   // expected output: 6
  
//   console.log(sum(1, 2, 3, 4));
//   // expected output: 10
  


// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];   // [1, 2, 3]

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

let obj1 = { foo: 'bar', x: 42 };
let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

console.log(obj1);
console.log(clonedObj);


