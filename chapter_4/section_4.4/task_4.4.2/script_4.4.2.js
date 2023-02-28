// Создайте объект calculator (калькулятор) с тремя методами:

// 1. read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// 2. sum() (суммировать) возвращает сумму сохранённых значений.
// 3. mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read() {
        this.a = +prompt('Введите значение a', 0);
        this.b = +prompt('Введите значение b', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );