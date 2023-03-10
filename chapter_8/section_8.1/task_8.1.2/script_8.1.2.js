// Алгоритм поиска

// Задача состоит из двух частей.

// У нас есть объекты:

/*
let head = {
    glasses: 1
};
  
  let table = {
    pen: 3
};
  
  let bed = {
    sheet: 1,
    pillow: 2
};
  
  let pockets = {
    money: 2000
};
*/

// 1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства 
// выполнялся по следующему пути: pockets → bed → table → head. 
// Например, pockets.pen должно возвращать значение 3 (найденное в table), 
// а bed.glasses – значение 1 (найденное в head).

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen ); // 3
  alert( bed.glasses ); // 1
  alert( table.money ); // undefined

//   2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses 
//   или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// С точки зрения производительности, для современных движков неважно, откуда берётся свойство – 
// из объекта или из прототипа.