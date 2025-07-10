```diff
+ Все вопросы были загуглены вручную, используя нейросеть гугла. После чего были проверены и отредактированы.
- Скорее всего к вам приебутся, так что подготовьтесь сверху. Либо напейтесь и рискуйте как это сделаю Я
```

## Билет 1
```
Билет 1
    1. Что такое HTML? Назови основные теги для структуры страницы.
    2. Как подключить CSS к HTML? Перечисли способы.
Практика: Создай HTML-страницу с заголовком "Моя первая страница" и абзацем текста.
```

1. Стандартный язык, используемый для создания веб-страниц; `<html></html>`; `<head></head>`; `<body></body>`.
2. `<link rel="stylesheet" href="styles.css">` в <head> HTML. Можно через параметр Styles в блоках, а можно подключить в head, как указано вначале пункта
### Практика: (Можно использовать "!" и нажать TAB, после чего заполнить получившееся.)
```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>Моя Первая Страница</title>
    </head>
    <body>
        ОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлег
        ОлегОлегОлегОлег
        ОлегОлегОлегОлегОлегОлегОлегОлегОлег
        ОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлегОлег
    </body>
    </html>
```

## Билет 2
```
Билет 2
    1. Что такое CSS? Для чего он используется?
    2. Как изменить цвет текста в CSS? Приведи пример.
Практика: Сделай все заголовки <h2> на странице синими.
```

1. CSS это язык, который используется для описания внешнего вида документа, написанного с использованием языка разметки, такого как HTML.
2. Задать в HTML `<class>`, после чего в CSS прописать color этого класса. Пример ниже
### Практика:
```css
    h2 {
    color: blue;
    }
```

## Билет 3
```
Билет 3
    1. Что такое атрибуты в HTML? Приведи примеры.
    2. Как задать внешние отступы (margin) в CSS?
Практика: Создай кнопку с текстом "Нажми меня" и добавь ей внутренние отступы (padding) 10px.
```

1. Атрибуты это специальные слова, которые добавляются в открывающий тег элемента, чтобы изменить его поведение или внешний вид, или предоставить дополнительную информацию. Напирмер id, class, style. src для `<img>`; href для `<a>`.
2. Необходимо прописать аттрибут margin и направление (top|bottom|left|right) в класс, допустим в .element. Ниже пример
```css
    .element {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-left: 25px;
    }
```
### Практика: (!!обратите внимание на style!!)
```html
    <button style="padding: 10px;">Нажми меня</button>
```

## Билет 4
```
Билет 4
    1. Как создать ссылку в HTML? Какие атрибуты у тега <a>?
    2. Что такое селекторы в CSS? Назови три типа.
Практика: Создай ссылку на сайт https://google.com и сделай её красной.
```

1. Чтобы создать ссылку в HTML, используется тег `<a>`, а внутри него атрибут href, который указывает адрес страницы, на которую ведет ссылка; у тэга `<a>` следующие аттрибуты: 
    `href`: адрес
    `target`: где открыть(новая вкладка, в текущей вкладке и т.д.)
    `rel`: тип связи
    `hreflang`: язык документа по ссылке
    `download`: скачать вместо перехода
    `media`: для какого устройства
    `ping`: какие URL будут уведомлены о переходе
    `referrerpolicy`: информация об источнике
```html
    <a href="https://www.example.com">Текст ссылки</a>
```
2. Селекторы - это шаблоны, которые используются для выбора элементов HTML, к которым нужно применить стили.
`Селектор типа (элемента)`: p - Выбирает все элементы `<p>` на странице.
`Селектор класса`: .highlight - Выбирает все элементы с классом "highlight".
`Селектор ID`: ##unique-element - Выбирает элемент с ID "unique-element".
### Практика:
```html
    <a href="https://www.google.com/" style="color: red">Ссылка ну Гугл</a>
```


## Билет 5
```
Билет 5
    1. Как добавить изображение на страницу? Какой тег используется?
    2. Как изменить размер шрифта в CSS?
Практика: Вставь изображение и задай ему ширину 200px.
```

1. `<img src="путь/к/изображению.jpg">`. img src
2. Свойством font-size
### Практика:
```html
    <img src="oleg.jpg" width="200">
```

## Билет 6
```
Билет 6
    1. Что такое списки в HTML? Какие бывают виды списков?
    2. Как сделать текст жирным в CSS?
Практика: Создай нумерованный список из трёх пунктов.
```

1. В HTML существуют три основных вида списков: 
`маркированные`: неупорядоченные; `ul`
`нумерованные`: упорядоченные; `ol`
`списки определений`: `dl`
2. font-weight: bold; (или font-weight: 700;)
```css
    .element {
    font-weight: 700;
    }
```
### Практика:
```html
    <ol>
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
    </ol>
```


## Билет 8 (Билета 7 нет)
```
Билет 8
    1. Что такое <div> и <h1>? В чём разница?
    2. Как скруглить углы у блока в CSS?
Практика: Создай <div> с серым фоном и скруглёнными углами.
```

1. В HTML тег `<div>` используется для группировки и стилизации блоков содержимого, в то время как тег `<h1>` предназначен для отображения заголовков первого уровня.
2. border-radius: 20%; (так же можно использовать px)
### Практика:
```html
    <div style="background-color: gray; border-radius: 10px;">
    Это div с серым фоном и скруглёнными углами.
    </div>
```


## Билет 9
```
Билет 9
    1. Как подключить JavaScript к HTML?
    2. Что такое class и id в CSS? В чём разница?
Практика: Напиши JS-код, который выводит в консоль "Привет, мир!".
```

1. Прописать `<script src="javaname.js"></script>` в Body или Head HTML
2. Id - уникальный; Class - может быть присвоен нескольким объектам.
### Практика:
```js
    console.log("Привет, мир!");
```

## Билет 10
```
Билет 10
    1. Что такое переменная в JavaScript? Как её объявить?
    2. Как скрыть элемент на странице с помощью CSS?
Практика: Создай переменную name и присвой ей своё имя, затем выведи её в консоль.
```

1. Переменная в JS это это именованная область памяти, используемая для хранения данных, к которым можно обратиться и изменить в процессе выполнения программы; Объявить переменную можно с помощью ключевых слов `var`, `let` или `const`
2. 
`display: none;` - удаляет со страницы
`visibility: hidden;` - скрывает, но оставляет видимое место
`opacity: 0;` - делает прозрачным
### Практика:
```js
    var name = "своё имя";
    console.log(name);
```


## Билет 11
```
Билет 11
    1. Что такое форма (<form>) в HTML? Какие основные атрибуты у неё есть?
    2. Как изменить фон элемента в CSS?
Практика: Создай форму с полем ввода имени и кнопкой отправки.
```

1. Форма - это раздел документа, предназначенный для ввода и отправки данных пользователем на сервер. action(действие), method(http-метод), name(имя формы), target(цель), enctype(вид шифрования) и autocomplete(автозаполнение, имеет параметры on и off), novalidate(отменяет проверку перед отправкой)
2. background-color.
```css
    .element {
    background-color: ##FF99D3;
    }
```
### Практика:
```html
    <form>
    <label for="name">Имя:</label><br>
    <input type="text" id="name" name="name"><br><br>
    <input type="submit" value="Отправить">
    </form>
```

## Билет 12
```
Билет 12
    1. Что такое EcmaScript ?
    2. Как создать функцию в JavaScript?
Практика: Создай контейнер с тремя блоками, выровненными по центру с помощью Flexbox.
```

1. EcmaScript - это стандарт, на котором основан язык программирования JavaScript. Более конкретно, ECMAScript определяет синтаксис, семантику и основные объекты и методы, которые должны быть реализованы в скриптовых языках, чтобы считаться совместимыми со стандартом.
2. 
```js
function func(funcpar) {
  console.log("Демонстрация функции; Был задан параметр:" + funcpar);
}
func("Oleg");
```
### Практика:
**HTML**
```html
<div class="container">
  <div class="item">Блок 1</div>
  <div class="item">Блок 2</div>
  <div class="item">Блок 3</div>
</div>
```
**CSS**
```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  line-height: 50px; /* Для центрирования текста по вертикали */
}
```


## Билет 13
```
Билет 13
    1. Что такое HTTP-методы.
    2. Как изменить стиль элемента при наведении?
Практика: Сделай кнопку, которая меняет цвет при наведении.
```

1. HTTP-метод - это последовательность из любых символов, кроме управляющих и разделителей, указывающая на основную операцию над ресурсом.
2.
```css
.element:hover {
  background-color: ##FF99D3;
}
```
### Практика:
**HTML**
```html
<button class="myButton">Кнопка.</button>
```
**CSS**
```css
.myButton:hover {
  background-color: ##FF99D3;
}
```

## Билет 14
```
Билет 14
    1. Что такое API? Объясни простыми словами.
    2. Как добавить границу (border) в CSS?
Практика: Создай div с пунктирной границей толщиной 2px.
```

1. API, или интерфейс программирования приложений, - это набор правил и инструкций, которые позволяют разным программам взаимодействовать друг с другом и обмениваться данными.
2. 
```css
    .element {
    border: 1px solid ##FF99D3;
    }
```
### Практика:
**HTML**
```html
    <div id="exdiv">
        <label>Vik</label>
    </div>
```
**CSS**
```css
.exdiv {
    border: 2px dotted black;
}
```
## Билет 15
```
Билет 15
    1. Что такое JSON? Где он используется?
    2. Как преобразовать объект JSON?
Практика: Напиши JSON-объект с полями name и age.
```

1. JSON (JavaScript Object Notation) - это стандартный текстовый формат для представления структурированных данных, основанный на синтаксисе объектов JavaScript; Используется в Веб-разработке, API, Хранении настроек, обмене данных между приложениями, localstorage
2. 
`JSON.stringify(obj)` - Преобразование объекта в JSON
`JSON.parse(obj)` - Преобразование JSON в объект
```js
const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};
const myJSON = JSON.stringify(myObject);
console.log(myJSON);
// Вывод: {"name":"John","age":30,"city":"New York"}

const jsonString = '{"name":"John","age":30,"city":"New York"}';
const myObject = JSON.parse(jsonString);
console.log(myObject);
// Вывод: { name: 'John', age: 30, city: 'New York' }
```
### Практика:
```js
const jsonString = '{"name":"John","age":30}';
```

## Билет 16
```
Билет 16
    1. Что такое localStorage в JavaScript? Как сохранить данные?
    2. Как изменить фон элемента в CSS?
Практика: Сохрани в localStorage строку "Hello, Web!" и прочитай её при загрузке страницы.
```
1. localStorage - это объект браузера, предоставляющий механизм для хранения данных в браузере пользователя на постоянной основе. "Как сохранить?" в практике
2. background-color.
```css
    .element {
    background-color: ##FF99D3;
    }
```
### Практика:
**HTML**
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>localStorage.setItem("myString", "Hello, Web!");</script>
    <script src="javaname.js"></script>
</body>
</html>
```

**JS**
```js
    document.addEventListener("DOMContentLoaded", function() {
    let myString = localStorage.getItem("myString");
    if (myString) {
        console.log("Сохраненная строка:", myString);
        // Используйте строку, например, добавьте её в элемент на странице
    } else {
        console.log("Строка не найдена в localStorage");
    }
    });
```

## Билет 17
```
Билет 17
    1. Как проверить длину строки в JS?
    2. Как объединить две строки?
Практика: Напиши функцию, которая соединяет имя и фамилию в одну строку.
```

1. *string.`length`*
```js
    const myString = "Привет, мир!";
    const stringLength = myString.length;
    console.log(stringLength); // Вывод: 12
```
2. *Знак `+`*
```js
    let str1 = "Hello";
    let str2 = "World";
    let result = str1 + ", " + str2 + "!";
    console.log(result); // Вывод: Hello, World!
```
### Практика:
```js
    let name = "Имя";
    let surname = "Фамилия";
    let fullname = name + " " + surname;
    console.log(fullname);
```

## Билет 18
```
Билет 18
    1. Как создать объект в JS?
    2. Как обратиться к свойству объекта?
Практика: Создай объект {name: "Иван", age: 20} и выведи имя в консоль.
```

1. Используя `{}`. Пример в Практике
2. Через `.` и `[]`. Пример в Практике
### Практика:
```js
const myObject = {
  name: "Иван",
  age: 20
};
console.log(myObject.name);
```

## Билет 19
```
Билет 19
    1. Как перехватить клик на кнопке (addEventListener)?
    2. Как отменить действие по умолчанию?
Практика: Сделай кнопку, которая меняет цвет фона при клике.
```

1. Ниже.
```js
    const button = document.getElementById('myButton'); // Получаем кнопку по id
    button.addEventListener('click', function(event) {
    console.log('Кнопка была нажата!', event);
    // event - это объект события, содержащий информацию о клике
    });
```
2. `event.preventDefault().` Этот метод применяется к объекту события, полученному в обработчике события. Если обработчик события назначен с помощью `on<событие>` (не `addEventListener`), то можно также вернуть false из обработчика
```js
    const link = document.querySelector('a');
    link.addEventListener('click', function(event) {
    event.preventDefault();
    // Дополнительный код, который нужно выполнить вместо перехода по ссылке
    console.log('Ссылка нажата, но переход отменен');
});
```
### Практика:
```html
<!DOCTYPE html>
<html>
    <head><title>Кнопка с изменением цвета фона</title></head>
    <body>
        <button class="myButton">Нажми меня</button>
        <script>
            const button = document.querySelector('.myButton');
            button.addEventListener('click', function() {
                if (this.style.backgroundColor === #00773D) {
                this.style.backgroundColor = #FF99D3;
                } else {
                this.style.backgroundColor = #00773D;
                }
            });
        </script>
    </body>
</html>
```

## Билет 20
```
Билет 20
    1. Что делает if в JavaScript?
    2. Как проверить, что число больше 10?
Практика: Напиши код, который проверяет, чётное ли число в переменной.
```

1. В JavaScript оператор if используется для выполнения блока кода, если указанное условие является истинным (true)
2. Используя оператор сравнения >.
```js
function ismorethan10(number) {
    return number > 10
}
```
### Практика:
```js
function isEven(number) {
  return number % 2 === 0;
}
```

## Билет 21
```
Билет 21
    1. Что такое alert() в JS?
    2. Как получить значение из <input>?
Практика: Сделай форму с полем ввода и кнопкой, которая выводит текст из поля в alert.
```

1. Функция alert() в JavaScript используется для отображения простого модального диалогового окна с сообщением на веб-странице
2. Чтобы получить значение из поля ввода `<input>` в JavaScript, нужно использовать свойство value
```js
    const inputElement = document.getElementById("myInput");
    const inputValue = inputElement.value;
```
### Практика:
```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Форма с alert</title>
        </head>
        <body>
            <input type="text" id="inputText">
            <button onclick="showAlert()">Показать в alert</button>
                <script>
                function showAlert() {
                let text = document.getElementById("inputText").value;
                alert(text);
                }
                </script>
        </body>
    </html>
```

## Билет 22
```
Билет 22
    1. Как подключить JavaScript к HTML?
    2. Как изменить содержимое элемента через JS?
Практика: При клике на кнопку поменяй текст в <div>.
```

1. Прописать `<script src="javaname.js"></script>` в Body или Head HTML
2. textContent по ссылке getElementById.
```js
document.getElementById("myElement").textContent = "Новый текст";
```
### Практика:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Изменение текста в div</title>
    </head>
<body>
  <button id="myButton">Нажми меня</button>
  <div id="myDiv">Исходный текст</div>
  <script>
    const button = document.getElementById("myButton");
    const div = document.getElementById("myDiv");

    button.addEventListener("click", function() {
      div.textContent = "Текст изменен!";
    });
  </script>
</body>
</html>
```

## Билет 23
```
Билет 23
    1. Чем let и const отличаются от var?
    2. Что такое шаблонные строки (template literals)?
Практика: Создай строку с подстановкой переменной: Имя: ${name}.
```

1. Основные различия между `var`, `let` и `const` в JavaScript заключаются в области видимости и возможности переопределения переменных.
2. Шаблонные строки (template literals) в JavaScript – это строки, заключенные в обратные кавычки (``), которые позволяют вставлять в строку значения переменных и выражений, а также создавать многострочные строки без использования дополнительных символов.
### Практика:
```js
const name = "Иван";
const message = `Имя: ${name}`;
console.log(message); // Вывод: Имя: Иван
```

## Билет 24
```
Билет 24
    1. Как получить значение из поля ввода (<input>) при клике на кнопку?
    2. Что такое деструктуризация в JS? Приведи пример.
Практика: Сделай форму, где при вводе имени в <input> оно выводится в alert.
```

1. Чтобы получить значение из поля ввода при нажатии кнопки, нужно добавить обработчик события click к кнопке, который будет получать значение из поля ввода.
```html
<input type="text" id="myInput">
<button onclick="getValue()">Получить значение</button>

<script>
    function getValue() {
    const inputElement = document.getElementById("myInput");
    const inputValue = inputElement.value;
    alert("Значение из поля ввода: " + inputValue);
    }
</script>
```
2. Деструктуризация в JavaScript - это синтаксис, который позволяет извлекать значения из массивов или свойств объектов и присваивать их отдельным переменным, делая код более читаемым и лаконичным.
```js
const person = {
  name: 'Иван',
  age: 20,
  city: 'Москва'
};

// Без деструктуризации
const name = person.name;
const age = person.age;

console.log(name); // "Иван"
console.log(age);  // 20

// С деструктуризацией
const { name: personName, age: personAge, city } = person;

console.log(personName); // "Иван"
console.log(personAge);  // 20
console.log(city);     // "Москва"
```
### Практика:
```html
<!DOCTYPE html>
<html>
    <head>
    <title>Ввод имени</title>
    </head>
<body>
    <input type="text" id="nameInput">
    <button onclick="showAlert()">Показать alert</button>

    <script>
        function showAlert() {
            let name = document.getElementById("nameInput").value;
            alert(name);
        }
    </script>
</body>
</html>
```


## Билет 25
```
Билет 25
    1. Что такое сервер? Объясни на примере магазина (frontend — витрина, backend — склад)?
    2. Почему JavaScript называют "однопоточным"? Что такое Event Loop?.
Практика: Напиши функцию, которая выводит в консоль числа от 1 до 5 с задержкой в 1 секунду (используй setTimeout)
```
1. Frontend - Это прилавок и полки; Backend - Это склад и другие офисы для рабочих. Оба зависят друг от друга чтобы функционировать и быть полезными.
2. JavaScript часто называют однопоточным языком, потому что он выполняет код последовательно, в один поток, то есть, за раз может выполняться только одна задача. Благодаря Event Loop, JavaScript может эффективно обрабатывать асинхронный код и оставаться отзывчивым, не блокируя выполнение других задач.
### Практика:
```js
function printWithDelay() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000); // 1000ms = 1s
  }
}

printWithDelay();
```


## Билет 26
```
Билет 26
    1. Что такое php? Для чего нужен? 
    2. Что такое массив в php? Как устроен? В каких режимах может работать?
Практика: Напиши функцию, которая проверяет строку на то является ли она палиндромом (в строке только английские символы и цифры, без пробелов, регистр учитваем)
```

1. PHP — это язык программирования, разработанный специально для веб-разработки. Он позволяет создавать динамические веб-страницы, веб-приложения и другие интерактивные элементы на сайтах.
2. В PHP массив - это упорядоченная структура данных, которая хранит набор элементов, каждый из которых связан с ключом. Массив представляется элементы в виде пар "ключ-значение". Работать массивы могут в режимах: 
`модуль Apache (mod_php)`
`CGI`
`FastCGI`
`PHP-FPM (Nginx)`
### Практика:
```js
function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
```


## Билет 27
```
Билет 27
    1. Что такое GET и POST запросы? Как из них читать данные?
    2. Что такое XSS-атаки? Как от них защищатся?
Практика: Создай два файла: form.php и request.php. В файле form.php сделай форму с <input>, которая будет отправлять post-запрос на request.php. В файле request.php должны выводится данные формы. Необходимо предусмотреть защиту от js-инъекций.
```

1. В контексте веб-разработки, GET и POST - это два основных метода HTTP-запросов, используемых для взаимодействия клиента с сервером.
2. XSS (межсайтовый скриптинг) - это уязвимость в веб-приложениях, позволяющая злоумышленникам внедрять вредоносный JavaScript-код на страницу, видимую пользователю. Защита от XSS включает в себя фильтрацию и экранирование пользовательского ввода, использование "белых списков" для контента, а также реализацию Content Security Policy.
### Практика:
***FORM.PHP***
```html
<?php
// form.php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Форма</title>
</head>
<body>
    <form action="request.php" method="post">
        <label for="input_text">Введите текст:</label><br>
        <input type="text" id="input_text" name="input_text"><br><br>
        <input type="submit" value="Отправить">
    </form>
</body>
</html>
```
***REQUEST.PHP***
```php
<?php
// request.php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Результат</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $input_text = isset($_POST["input_text"]) ? $_POST["input_text"] : '';
        $input_text = htmlspecialchars($input_text, ENT_QUOTES, 'UTF-8'); // Защита от JS-инъекций
        echo "<p>Введенный текст: " . $input_text . "</p>";
    } else {
        echo "<p>Нет данных для отображения.</p>";
    }
    ?>
</body>
</html>
```
