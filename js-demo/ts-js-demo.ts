
console.log('Welcome');

let num2: number = 10;
console.log(num2);
// num2 = "aaa"; // CE - type safety 
console.log(num2);

let someFun = (a: number, b: number): number => {
    // console.log(a + b);
    return a + b;
    // return "aaa";
};

someFun(10.50, 20);
// someFun("aaa", "bbb");