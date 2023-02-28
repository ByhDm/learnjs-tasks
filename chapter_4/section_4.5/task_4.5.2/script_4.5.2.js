// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// 1. read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// 2. sum() возвращает сумму этих свойств.
// 3. mul() возвращает произведение этих свойств.

//Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите значение a', 0);
        this.b = +prompt('Введите значение b', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
    
  }