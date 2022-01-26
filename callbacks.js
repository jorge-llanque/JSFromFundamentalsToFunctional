// High Order Functions

// Callbacks
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
};
ifElse(true,
    () => {console.log(true);},
    () => {console.log(false);}
);

// Passing Arguments
var increment = function(n){return n + 1;};
var square = function(n){return n * n;};
var doMathSoIDontHaveTo = function(n, func){ return func(n);};

doMathSoIDontHaveTo(5, square); // 25
doMathSoIDontHaveTo(4, increment); // 5

// Rest Operator
const ifElse2 = (condition, isTrue, isFalse, ...args) => {
    console.log(args) // ['HI', 'BYE', 'HOLA']
    return condition ? isTrue(...args) : isFalse(...args);
};
ifElse2(true, fn1, fn2, 'HI', 'BYE', 'HOLA');

// _.reduce()
_.reduce([1,2], function(sum, n){
    return sum + n;
},0);  // 3

_.reduce({'a': 1, 'b':2, 'c': 1}, function(result, value, key){
    (result[value] || (result[value] = [])).push(key);
    return result
},{}); // {'1':['a','c'], '2':['b']}


const reduce = function(list, cb, initial){
    let memo = initial;
    for(let i=0;i<list.length;i++){
        if(i === 0 && memo === undefined){
            memo = list[0];
        }else {
            memo = cb(list[i], memo)
        }
    }
    return memo;
};
reduce([2,3,5], (v, sum)=>v+sum)

const notInRoom = suspect => {
    const emptyRooms = reduce(suspect.rooms, (room, memo) => {
        if(room === false) memo.push(room);
        return memo
    },[]);
};

notInRoom = _.map(newDevelopment, notInRoom)
_.intersection(...notInRooms)

//Exercises
const calculateCurrentClimateInCelsius = function(country, date, cb){
    let codeCountry = country === "Bolivia" ? "Bol" : "USD";
    return cb(codeCountry, date);
}

const result = calculateCurrentClimateInCelsius("Bolivia", "20/10/2022", function(codeC, date){
    return 23
});

console.log(result, "JE");