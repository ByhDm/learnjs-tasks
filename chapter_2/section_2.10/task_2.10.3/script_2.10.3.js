// Используя конструкцию if..else, напишите код, который получает число через prompt, 
// а затем выводит в alert:

//      1, если значение больше нуля,
//      -1, если значение меньше нуля,
//      0, если значение равно нулю.

// Предполагается, что пользователь вводит только числа.

'use strict';

let value = prompt('Введите число', '0');

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}