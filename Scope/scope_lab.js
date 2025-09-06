// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{

    console.log(globalVar); // Output: "I'm a global variable"
    //console.log(globalLet); // Output: "I'm also global, but scoped with let"
    //console.log(globalConst); 

    let globalLet = "Hey i am global - changed inside block";
    const globalConst = "Hey i am global - changed inside block";
    var globalVar = "Hey i am global - changed inside block";

    console.log(globalVar); // Output: "I'm a global variable"
    console.log(globalLet); // Output: "I'm also global, but scoped with let"
    console.log(globalConst);

    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar); //Throws Reference error
// console.log(blockLet); //Throws Reference error

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    var testVar = "Hey test 1";
    let testLet = "Hey test 2";
    const testConst = "Hey test 3";

    testVar = "can reassign";
    testLet = "can reassign";
    //testConst = "immutable"; //TypeError

}

console.log(testVar);
//console.log(testLet); //Reference Error
//console.log(testConst); //Reference Error

console.log(typeof testVar);
console.log(typeof testLet); //Undefined
console.log(typeof testConst); //Undefined


testVar = "variable declared in the block";
testLet = "new variable";
testConst = "new variable";

console.log(typeof testVar); //String
console.log(typeof testLet); //String
console.log(typeof testConst); //String

console.log(testVar);
console.log(testLet);
console.log(testConst);

{
    console.log(testVar);
    console.log(testLet);
    console.log(testConst);

    testVar = "hey am I the same???";
    testLet = "hey am I the same???";
    testConst = "hey am I the same???";

    console.log(testVar);
    console.log(testLet);
    console.log(testConst);

}

console.log(testVar);
console.log(testLet);
console.log(testConst);