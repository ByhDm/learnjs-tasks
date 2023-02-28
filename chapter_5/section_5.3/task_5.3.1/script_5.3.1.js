// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

'use strict';

// ucFirst("вася") == "Вася";

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") );