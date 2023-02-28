// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

let x = +prompt('Введите число x', 0);
let n = +prompt('Введите число n', 0);

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

if (n < 1) {
    alert(`Степень ${n} не натуральное число`)
} else {
    alert(pow(x, n));
}

function pow(x, n) {
    let result = x;

    for(let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}