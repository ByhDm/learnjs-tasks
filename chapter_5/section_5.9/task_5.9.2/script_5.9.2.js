// Подсчёт количества свойств объекта

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};
  
alert( count(user) ); // 2

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

function count(obj) {
    return Object.keys(obj).length;
}