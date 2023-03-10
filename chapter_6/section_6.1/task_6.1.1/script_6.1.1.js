// Вычислить сумму чисел до данного

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// 1. Вариант с использованием цикла.

/*
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

alert( sumTo(100000) );
*/

// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

/*
function sumTo(n) {
    return n == 1 ? 1 : n + sumTo(n - 1);
}
*/

// 3. С использованием формулы арифметической прогрессии.

function sumTo(n) {
    return n * (n + 1) / 2;
}
  
alert( sumTo(4) );
alert( sumTo(10) );
alert( sumTo(100) );

// Самый быстрый вариант 3, так как используется меньше всего операций - три. 
// Самый медленный вариант с использованием рекурсии - содержит вложенные вызовы.

// Можно ли при помощи рекурсии посчитать sumTo(100000)?

// Максимальная глубина рекурсии ограничена движком JavaScript. 
// Точно можно рассчитывать на 10000.
// Поэтому будет скорее всего будет ошибка
