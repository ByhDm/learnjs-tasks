// Обязателен ли "else"?

// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
*/

checkAge( 15 );

// В указанном выше примере else необязателен, можно было бы написать так:

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      return confirm('Родители разрешили?');
  }

  // Отличий нет, обе функции работать будут одинаково