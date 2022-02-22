// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
let sPr = (a,b)=> a * b;
console.log(sPr(3, 3));

// - створити функцію яка обчислює та повертає площу кола
let sColo = (r) => Math.PI * Math.pow(r, 2);
console.log(sColo(10));

// - створити функцію яка обчислює та повертає площу циліндру
let sCil = (h,r)=> 2 * Math.PI * r * (r + h);
console.log(sCil(3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = (...mas) => {
    for (const ar of mas) {
        console.log(ar);
    }
}
arr(1,2,3,4,5,6,7,8,9);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let txt = (txt) => document.write(`<p>${txt}</p>`);
txt('texttxet');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulli = (li) => {
    document.write(`<ul>`)
    document.write(`<li> ${li} </li>`)
    document.write(`<li> ${li} </li>`)
    document.write(`<li> ${li} </li>`)
    document.write(`</ul>`)
}
ulli('some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let forli = (li, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${li} </li>`);
    }
    document.write(`</ul>`);
}
forli('some text', 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrElement = (...elements) =>{
document.write(`<ul>`);
    for (const element of elements) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
arrElement(1,2,true,false,'weaw','fwhb');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {
        id:1,
        name:'Ivan',
        age: 32,
    },
    {
        id:2,
        name:'Navi',
        age: 23,
    },
    {
        id:3,
        name:'Vani',
        age: 50,
    }
]

let navi = (users) =>{
    for (const user of users){
        document.write(`<div>id - ${user.id}, Name is ${user.name}, age - ${user.age}</div>`)
    }
}
navi(users);