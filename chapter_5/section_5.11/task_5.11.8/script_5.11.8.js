// Форматирование относительной даты

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// 1. Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// 2. В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// 3. В противном случае, если меньше часа, вывести "m мин. назад".
// 4. В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
//    А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

// Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
      return 'прямо сейчас';
    }
  
    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000);

    if (min < 60) {
      return min + ' мин. назад';
    }
  
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2));
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}