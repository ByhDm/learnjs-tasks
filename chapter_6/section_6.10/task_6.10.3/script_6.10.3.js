// Свойство функции после bind

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

'use strict';

function sayHi() {
    alert( this.name );
}
sayHi.test = 5;
  
let bound = sayHi.bind({
    name: "Вася"
});
  
alert( bound.test ); // undefined

// Результатом работы bind является другой объект. У него уже нет свойства test.