// Вывод односвязного списка

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

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

// 1. В цикле

/*
function printList(list) {
    let elemList = list;

    while (elemList) {
      alert(elemList.value);
      elemList = elemList.next;
    }
}
*/

// 2. С рекурсией

function printList(list) {
    alert(list.value);

    return list.next ? printList(list.next) : 1;
}

printList(list);

// Эффективность выше у цикла, с рекурсией более компактно и читабельней