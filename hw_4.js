

  let user = {
    name: "john",
    age: 30
}
//Вернет объект с измененным полем age
function changeAgeInObj(obj, age) {
    
    obj.age = age;
    return obj;
    
}
//console.log(changeAgeInObj(user, 21));


//2. Создать копию объекта user с именем admin. 
//Добавить новому объекту поле role со значением admin

//Будет
//
//  {
//     "name": "john",
//     "age": 30,
//     "role": "admin"
// }


function addFieldToCopy(obj, NewField) {
    return Object.assign({}, obj, NewField);
}

//console.log(addFieldToCopy(user,{role:'admin'}));

// let obj2 = Object.assign({}, user, {name:"admin"}, {role:'admin'});
// console.log(obj2); //{name: 'admin', age: 14, role: 'admin'}

// let name = obj2.name;
// let age = obj2.age;
// let role = obj2.role;