// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

'use strict';

let age = prompt('Введите число', '0');

if ((age >= 14) && (age <= 90)) {
    alert( true );
} else {
    alert ( false );
}