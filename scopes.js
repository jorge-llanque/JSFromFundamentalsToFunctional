/* Advanced Scope */


// What happens first? log or the alert?
const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
        alert(x);
    }
    
    setTimeout(alerter, 1000);
    console.log('what happens first? this log or the alert?');
}
myAlert();


// We're gonna to create a closure for each function invoke
const myAlert2 = () => {
    const x = "Help! I think I found a clue";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };
    return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert();
funcAlert();
funcAlert();
funcAlert2();


// closure a little more complicated

const newClue = (name) => {
    const length = name.length;
    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue %1);
    };
};
const didGreenDoItWithA = newClue('Green');
didGreenDoItWithA('candlestick');

// closure a little more difficult
function countClues(){
    var n = 0;
    return {
        count: function(){return ++n},
        reset: function(){return n = 0}
    };
};

var counter = countClues();
var counter2 = countClues();
counter.count();
counter.count();
counter.count();
counter2.count();
counter2.count();
counter2.count();


// Closure a little more difficult, inside whatever scope the variable ask
// if are there any definition, if there is not, ask its parent scope.. :-)
const findSomeone = () => {
    const speak = () => {
        console.log(who);
    };
    let who = 'Why hello there, Prof. Plum!';
    return speak;
};

const someoneSpeak = findSomeone();


// More of Closuresssssssssssss
const makeTimer = () => {
    let elapsed = 0;
    const stopwatch = () => {return elapsed;};
    const increase = () => elapsed++;

    setInterval(increase, 1000);
    return stopwatch;
}

let timer = makeTimer();

timer();
timer();
timer();


// Currying
const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg, arg2)
        }
    }
}
curry(1)(2) //[1,2]