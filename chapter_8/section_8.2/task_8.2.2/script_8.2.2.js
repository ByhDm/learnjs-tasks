// Создайте новый объект с помощью уже существующего

// 1. Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – 
// мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

let obj2 = new obj.constructor();

// Ответ - можем, если есть уверенность, что свойство "constructor" 
// существующего объекта имеет корректное значение.

// 2. Приведите пример функции-конструктора для объекта obj, 
// с которой такой вызов корректно сработает. И пример функции-конструктора, 
// с которой такой код поведёт себя неправильно.

// Сработает

/*
function User(name) {
    this.name = name;
}
  
let user = new User('John');
let user2 = new user.constructor('Pete');
  
alert( user2.name ); // Pete
*/

// Undefined - перезаписано свойство prototype и не назначено свойство constructor

function User(name) {
    this.name = name;
  }
User.prototype = {};
  
let user = new User('John');
let user2 = new user.constructor('Pete');
  
alert( user2.name ); // undefined