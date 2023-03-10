// Изменяем "prototype"

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
*/

// 1. Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true
*/

// 2. …А если код такой (заменили одну строчку)?

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false
*/

// 3. Или такой (заменили одну строчку)?

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true
*/

// 4. Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined