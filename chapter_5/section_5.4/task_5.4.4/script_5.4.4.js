// Напишите функцию sumInput(), которая:

// 1. Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// 2. Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку 
//    или нажмёт «Отмена».
// 3. Подсчитывает и возвращает сумму элементов массива.

// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

'use strict';

function sumInput() {

    let values = [];
        
    while (true) {
        let value = prompt("Введите значение массива", 0);

        if (!isFinite(value) || value === '' || value === null) {
            break;
        }
        values.push(+value);
    }

    let sum = 0;
    for(let value of values) {
        sum += value;
    }

    return sum;
}

alert( sumInput() );