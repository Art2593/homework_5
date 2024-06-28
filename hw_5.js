console.log("i am")

let arr = [1,2,3,4,5,6,7,8,9,10]; //55

//Выведите в консоль сумму всех элементов массива


//[1,2,3,4,5,6,7,8,9,10] -> 55
//[1,2] -> 3

function sumOfAllElements(array) {
    let summ = 0;
    for (let index = 0; index < array.length; index++) {
        summ = summ + array[index];
    }
    return summ;
}

console.log(sumOfAllElements([1,2]));
console.log(sumOfAllElements([1,2,3,4,5,6,7,8,9,10]));


function multiplyEachElBy_2(array) {
    
    let arr2 = Object.assign([], array);


    for (let index = 0; index < arr2.length; index++) {
        arr2[index] = arr2[index] * 2;
        
        
    }
    return arr2;

}

console.log(multiplyEachElBy_2([1,2,3]));
console.log(multiplyEachElBy_2([1,1,1]));

function getMinValue(array) {
    let minValue = array[0];
    
    for (let index = 0; index < array.length; index++) {
    if(array[index] < minValue){
        minValue = array[index];
    }
        
    }
    return minValue;
}

console.log(getMinValue([1,2,3]));
console.log(getMinValue([2,3]));

function getMaxValue(array) {

        let maxValue = 0;
        for (let index = 0; index < array.length; index++) {
        
        if(array[index] > maxValue){
            maxValue = array[index];
        }
            
    }
    return maxValue;

}

console.log(getMaxValue([5,7,8]));
console.log(getMaxValue([5,7,80]));