// Деструктурирующее присваивание

// У нас есть объект:

/*
let user = {
    name: "John",
    years: 30
};
*/

// Напишите деструктурирующее присваивание, которое:

// 1. свойство name присвоит в переменную name.
// 2. свойство years присвоит в переменную age.
// 3. свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

// Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false