// Сколько сегодня прошло секунд?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

alert( getSecondsToday() ) // == 36000 (3600 * 10)

// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000);
}