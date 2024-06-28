console.log('Hi');

//1.Запросите у пользователя дату в формате ДД. ММ. ГГГГ.
// const inputDate = prompt("DD.MM.YYYY");

function getDayName(inputDate) {
    
    let [day, month, year] = inputDate.split('.');

    let infoDay = new Date(`${year}-${month}-${day}`);
    
    let weekDay = infoDay.getDay();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    
    return dayNames[weekDay];

}

console.log(getDayName('13.06.2024')); //Thursday

//2. Написать программу, которая выводит в консоль 
// количество минут, прошедшее с начала сегодняшнего дня.



function getMinutesFromStaretedDay() {
    const date = new Date();
    const minutes = date.getHours() * 60 + date.getMinutes() ;
    return minutes;
}

console.log(getMinutesFromStaretedDay());

//HW-3
// В двух переменны х х ранятся даты рождения двух пользователе й в формате ДД. ММ ГГГГ . 
//Написать программу, которая определяет более молодого пользователя.
let user1 = new Date('1993-01-12');
let user2 = new Date('1999-01-23');

function getDateOFyoungerUser(user1, user2) {
    let users = [user1, user2];

    let youngerUser = users[0];
    for(let item of users){
        if(youngerUser < item){
            youngerUser = item;
        }
    }
    return youngerUser;
}

console.log(getDateOFyoungerUser(user1, user2));