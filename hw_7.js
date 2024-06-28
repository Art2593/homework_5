// Задача Положить значение из input в html

//Получаем доступ к элементу и на него навешиваем тип события и для этого типа указываем, 
//что нужно сделать 
// document.getElementById('button').addEventListener('click', showTextInConsole);
document.getElementById('button').addEventListener('click', putInsertedValue);
document.getElementById('input').addEventListener('click', showHiddenButton);




//Пишем функции для обработчиков событий 
function showTextInConsole() {
    let val = document.getElementById('input').value;
    console.log(val);
}

function putInsertedValue() {
    //Сначала положили в тег block
    let block = document.getElementById('block');
    let val =  document.createElement('p');
    val.className = 'paragraph';
    val.innerHTML = document.getElementById('input').value;
    block.append(val);

    //Проверяем количество тегов 'p'
    if (block.querySelectorAll('p').length == 5) {
        let arr = block.querySelectorAll('p');
        arr[0].remove();
    }
    // let length = block.querySelectorAll('p');
    // console.log(length);

}

function showHiddenButton() {
    let button = document.getElementById('button');
    button.style.display = 'block';
}



