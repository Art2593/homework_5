function showMessage() {
    console.log("Hi there");
  }
  showMessage();


// 2, 4 => 4
// 7, 4 => 7

function greaterValue(value_1, value_2) {
    if (value_1 > value_2) {
        return value_1;
    } else {
        return value_2;
    }
}

// 1 => Январь
// 15 => Нет такого месяца
function getNameOfMonth(key) {
    
switch (key) {
        case 1:
            return "Январь";
            break;
        
        case 2:
            return "Февраль";
            break;

        case 3:
            return "Март";
            break;
            
        case 4:
            return "Апрель";
            break;

        case 5:
            return "Май";
            break;
        
        case 6:
            return "Июнь";
            break;
    
        case 7:
            return "Июль";
            break;
            
        case 8:
            return "Август";
            break;
    default:
        return "Нет такого месяца";
        break;
}
}
//console.log(getNameOfMonth(15));

    
// 10, 14 => Круг поместился в квадрат
// 15, 14 => Круг не поместился в квадрат

function isCircleInSquare(circle, square) {
    

    let diametrOfCircle = 2 * Math.sqrt(circle/3.14);
    
    let squareSide = Math.sqrt(square);

    if (diametrOfCircle <= squareSide) {
        return "Круг поместился в квадрат";
    } else {
        return "Круг не поместился в квадрат";
    }
}

// console.log(isCircleInSquare(10, 14));
// console.log(isCircleInSquare(15, 14));
