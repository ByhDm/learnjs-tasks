// Анимация круга с помощью промиса

// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка 
// таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы 
// функцию-callback.

/*
showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
*/

// Новое использование:

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});