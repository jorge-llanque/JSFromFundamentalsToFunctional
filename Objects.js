/* Access with dots*/
var person = {};
person.name = "Mrs. White";

var who = person.name;

person.name = "Mr. White";
console.log(who);

/* Arrays */
var person2 = [];
person2.name = "bla";
var who = person2.name;
console.log(person2);
console.log(typeof person === "array");

/* Bracket notation */
var person3 = [];
person3.name = "sdf";
person3[0] = "sdfxcv";
console.log(person3);

//Array Destructuring for a variable declaration
const [first, second] = ["hi", "babe"];
var [first, second] = [true, false];
let [first, second] = [001,002];

// Object Destructuring for a variable declaration
const {first, second} = {first:1, second:4};
let {first, second} = {first:"sd", second: "vv"};
var {first, second} = {first:true, second: false};

// omit one
const [a, ,b] = [1,2,3];

// Combine with spread/rest operator
const [c, ...d] = [1,2,3];


// Advance deep arrays
var [a, [b, [c,d]]] = [1, [2, [[[3,4], 5], 6]]];
console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);

// Combine destructuring of objects and arrays
var {prop: x, prop2: [,y]} = {prop: 5, prop2:[10,100]};


// Using as method parameters
var foo = function({prop:x}){
    console.log(x);
}
foo({prop:1})

// Can also use with the advanced example
var foo = function({
    prop: x,
    prop2:{
        prop2:{
            nested: b
        }
    }
}){
    console.log(x, ...b)
};
foo({prop: "Hello", prop2: {prop2: {nested:["a", "b", "c"]}}});

// Computed property names
const name = 'fieldName';
const computedObject = {[name]:name};
const {[name]: nameValue} = computedObject;
console.log(nameValue);


// Woops
var users = [
    {user: "name1"},
    {user: "name2"},
    {user: "name3"}
];

var names = users.map(({user: fuckname}) => fuckname);
// OR users.map(({user}) => user);
console.log(names);



/* EXERCISES */
const {me, she, c} = {
    me: 201,
    she: 102,
    c: function(a, b){
        return a.toString().split('').reverse().join('') === b.toString() ? "Palindrome!!!!!" : "nope";
    }
}
console.log(she)
console.log(c(me, she));