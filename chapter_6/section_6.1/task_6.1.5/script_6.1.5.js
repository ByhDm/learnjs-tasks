// Вывод односвязного списка в обратном порядке

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

// 1. В цикле

// function printReverseList(list) {
//     let arr = [];
//     let elemList = list;
  
//     while (elemList) {
//       arr.push(elemList.value);
//       elemList = elemList.next;
//     }
  
//     for (let i = arr.length - 1; i >= 0; i--) {
//       alert( arr[i] );
//     }
// }
  
// 2. С рекурсией

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
      }
    
      alert(list.value);
}  

printReverseList(list);