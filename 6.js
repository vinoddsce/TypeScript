// Type assertions.
// let n = 100;
// let message: string = 'abc';
// let endsWithC: boolean = message.endsWith('c');
// console.log(endsWithC);
// console.log(typeof message);
// // By default if you wont set the value the type will be any
// // let msg2: string;
var msg2;
// console.log(typeof msg2);
// // msg2.
msg2 = 'Vinod Kumar M';
// msg2 = 100;
// msg2.
if (typeof msg2 === 'string') {
    console.log(msg2.substr(0, 4));
}
else {
    console.log("It's Not String ..... ");
}
// console.log((msg2 as string).endsWith('d'));
// console.log((<string>msg2).endsWith('c'));
// // // // OR
// console.log((msg2 as string).endsWith('c'));
