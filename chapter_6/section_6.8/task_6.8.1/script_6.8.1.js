// Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.

// 1. Используя setInterval.

/*
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
}
*/  

// 2. Используя рекурсивный setTimeout.

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function showNumber() {
      alert(current);
      if (current < to) {
        setTimeout(showNumber, 1000);
      }
      current++;
    }, 1000);
}
  
printNumbers(5, 10);