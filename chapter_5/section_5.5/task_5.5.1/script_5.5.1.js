// Переведите текст вида border-left-width в borderLeftWidth

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

/*
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
// потом переделайте всё как нужно и методом join соедините обратно.

'use strict';

function camelize(str) {
    return str.split('-')
              .map((elem, index) => index == 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
              .join('');
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );