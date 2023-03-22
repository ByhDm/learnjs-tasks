// Проверка синтаксиса

// Каким будет результат выполнения этого кода?

'use strict'

let user = {
    name: "John",
    go: function() { alert(this.name) }
}
  
(user.go)()

// Ошибка - script_14.4.1.js:12 Uncaught ReferenceError: Cannot access 'user' before initialization
// at script_14.4.1.js:12:2

// Если поставить после user = {...} точку с запятой, то ошибки не будет