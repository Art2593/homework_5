console.log('Hi');

function getDiffer(param1, param2) {
    
    return param1 - param2;
}


console.log(getDiffer(12, 7));
console.log(getDiffer(12, 2));

function isWord(param) {
    
    let arr = param.split(" ");
    if (arr.length == 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isWord("usodif uo is  ud")); //false
console.log(isWord("usodif")); //true

function poww(variable, power) {
    
    let pow = 1;

    for (let index = 0; index < power; index++) {
        pow = variable * pow
    }
    return pow;
}

console.log(poww(2,3)); //8
console.log(poww(4,2)); //16



