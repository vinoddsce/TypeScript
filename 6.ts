// Type assertions.


// let n = 100;

let message: string = 'abc';
let endsWithC: boolean = message.endsWith('c');
console.log(endsWithC);



// By default if you wont set the value the type will be any

// let msg2: string;
let msg2;
// msg2.
msg2 = 'abc';
// msg2.

console.log(typeof msg2);

console.log((<string>msg2).endsWith('c'));
// // // OR
console.log((msg2 as string).endsWith('c'));