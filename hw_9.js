

function isRightTriangle(a, b, c) {
    let sumOfTwoSides = a*a+b*b;
    let BiggestSide = c*c;

    if(sumOfTwoSides === BiggestSide){
        return "Это прямоугольный треугольник";
    }
    else{
        return "Это что-то другое";
    }
}

// console.log(isRightTriangle(3,4,5));

//Найти длину окружности с радиусом R
function getCircleLength (r){
    let circleLength = 2 * Math.PI * r;
    return circleLength;
}
// console.log(getCircleLength(4)); 25.132741228718345

//Найти площадь круга с радиусом R

function getCircleSquare(r) {
    let circleSquare = Math.PI * Math.pow(r,2);
    return circleSquare;
}
// console.log(getCircleSquare(4)); 50.26548245743669

let a = 1, b = -7, c = 12; // 4 и 3


    function getRoots(a, b, c) {
        
        let d = b * b - 4 * a * c; 

        let sqrt_val = Math.sqrt(Math.abs(d)); 
      
        if (d > 0) { 
            // console.log('Получаем два разных корня'); 
      
           
              return  (-b + sqrt_val) / (2 * a) + " и " + (-b - sqrt_val) / (2 * a) 
            ; 
        } 
        else if (d == 0) { 
            // console.log('Корни одинаковые'); 
      
            return -b / (2 * a) + " и " + -b / (2 * a); 
        } 
      
        // d < 0 
        else { 
            // console.log('Корней нет');
             
            return 'Корней нет';
      
            
        } 

    }

    // console.log(getRoots(1, -7, 12)); '4 и 3'