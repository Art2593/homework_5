function showMessage() {
    console.log("Hi there");
  }
  showMessage();

// 1 + 1 = 2
// 2 + 2 = 4
  function sum(param_1, param_2) {
    return result = param_1 + param_2;
  }

  // "123", "1234" => 7
  // "1234", "1234" => 8
  function numberOfCharacters(param_1, param_2) {
    return param_1.length + param_2.length;
  }

  // "123" => 6
  // "111" => 3

function sumOfThreeDigits(number) {
    let digit3 = number % 10; //вернет остаток от деления 3
    let digit1 = (number - (number % 100)) / 100;  //вернет 1
    let digit2 = (number - digit1 * 100 - digit3) / 10;
    return sum = digit1 + digit2 + digit3;
}
