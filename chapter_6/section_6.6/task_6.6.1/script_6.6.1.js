// Установка и уменьшение значения счётчика

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// 1. counter() должен возвращать следующее значение (как и раньше).
// 2. counter.set(value) должен устанавливать счётчику значение value.
// 3. counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
}

let counter = makeCounter();

counter.set(100);
alert( counter() ); // 100

counter.decrease();
counter.decrease();
counter.decrease();

alert( counter()); // 98