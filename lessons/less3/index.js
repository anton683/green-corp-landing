// let a = 2;
// console.log(а); // a - не существует

// с => c, o => о, p, a, e

// Ctrl + Shift + R

/*
    let n;
    const PLACE = "ул. Ленина, дом.1";
    n = 5;


    age = 10;
    name = "Vasya";

    console.log(age);
    console.log(age + 1);

    age = age + 2;
    console.log(age); // 13 - 12 ???

    var age = 20;
    console.log(age);
    console.log(PLACE);
*/

/*
    q 3.2
*/

let name = "Всеволод";
let last_name = "\nСтарозубов";

let sum = name.trim().length + last_name.trim().length
console.log(sum);

/*
    q 3.1
*/

let word_1 = "велосипед", word_2 = "полезен";
console.log(word_1, word_2); // "велосипед" "полезен"
console.log(word_1 + " " + word_2); // "велосипед полезен"
console.log(`${word_1} ${word_2}`);

/*
    q 3.7
*/

// let person = {
//     name: "Roman",
//     profession: "developer",
//     wife: {
//         name: "Lusy",
//         age: 19,
//         profession: "designer"
//     }
// }

// console.log(person.name);

let obj = {
    name: "Анатолий",
    last_name: "Максимов",
    age: 32
}

let str = "Имя: \"" + obj.name + "\" Фамилия: '" + obj.last_name + "' Возраст: " + obj.age;

str = `Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`;

console.log(str);

console.log("B" + "a" + +"a" + "a");

/*
    to Number
    "2" * 1 => 2
    "2" / 1 => 2
    "2" - 0 => 2
    +"2" => 2
    +"24st" => NaN (not a number)
    parseInt() / parseFloat()

    to String
    2 + "" => "2"
    false + "" => "false"
    toString()

    to Boolean
    !!1 => true
    !!"" => false
    !!undefined => false
*/

// NaN !== NaN

/*
    Дом / 3 => NaN (треть дома)
    Кот * 3 => NaN (три кота)

    треть дома === три кота 
*/

/*
    q 3.10
*/

let num_1 = "3", num_2 = "5";
// v1
sum = parseInt(num_1) + parseInt(num_2);
// v2
sum = parseFloat(num_1) + parseFloat(num_2);
console.log(sum);

/*
    q 3.11
*/
let size = "500.5%";
console.log(parseFloat(size));

/*
    q 3.5
*/
let a = 2, b = 4
// v1
console.log((a * b) ** 2)
// v2
console.log(Math.pow((a * b), 2))

/*
    q 3.12
*/
a = "5px";
b = "7px";
let c = "10px";

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

/*
    q 3.9
*/
let value = "привет";
// v1
console.log(typeof value === "object" && value === null ? "null" : typeof value);

// v2
if (typeof value === "object" && value === null) {
    console.log("null");
} else {
    console.log(typeof value)
}

// a ? "v1" : "v2"

/*
    q 4.2
*/

let price = "-12 слонов и пол зайца";
price = parseInt(price);

if (isNaN(price)) {
    console.log("Не число");
} else if (price <= 0) {
    console.log("Число не корректное");
} else {
    console.log(price);
}

/*
    q 4.7
*/
let price = 10000, range = "day";

// month/day/week
switch (range) {
    case "month":
        console.log(`${price} Р в месяц`);
        break;
    case "day":
        console.log(`${price} Р в день`);
        break;
    case "week":
        console.log(`${price} Р в неделю`); 
        break;
}

/*
    q 4.9
*/

a = 2
b = 0

let sign = "/";
switch (sign) {
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": 
        if (!b) {
            console.log("Делить на 0 нельзя!");
        } else {
            console.log(a / b); 
        }
        break;
}

/*
    Boolean
    true
        1, 2, 4.5, -12, 0.1
        'aewuhg', "123", " "
        {}, []
    false
        0
        ""
        NaN
        null
        undefined
*/


// Задачка для себя =)
/*
    Дом
    находится
    Количество домов - 0 - 1000

    В городе находится n домов

    находится 1 дом
    находятся 202 дома
    находятся 314 домов

    Для понимания логики - посчитайте до 30
    Подсказка: Использовать остаток от деления (%)
*/