let arr = [1, 44, -666, 55555, 'televizor', 'otkruvaetca', 'donkratom', 'proverka', 'cvazi', false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
let book1 = {title: 'alfa', pageCount: 3, genre: 'comedy'};
let book2 = {title: 'omega', pageCount: 4, genre: 'tragedy'};
let book3 = {title: 'poema', pageCount: 5, genre: 'neizvesten'};
console.log(book1);
console.log(book2);
console.log(book3);

let book4 = {title: 'voina', pageCount: 30, genre: 'comedy',authors:[{name:'tolstoi',age:54}]};
let book5 = {title: 'ta', pageCount: 40, genre: 'tragedy',authors:[{name:'lev',age:76}]};
let book6 = {title: 'mur', pageCount: 50, genre: 'neizvesten',authors:[{name:'nikolaevich',age:67}]};
console.log(book4);
console.log(book5);
console.log(book6);
// Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
// 'Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {id:1,name:'ivan', username:'ivanchenco1',password:111},
    {id:2,name:'ivan2', username:'ivanchenco2',password:222},
    {id:3,name:'ivan3', username:'ivanchenco3',password:333},
    {id:4,name:'ivan4', username:'ivanchenco4',password:444},
    {id:5,name:'ivan5', username:'ivanchenco5',password:555},
    {id:6,name:'ivan6', username:'ivanchenco6',password:666},
    {id:7,name:'ivan7', username:'ivanchenco7',password:777},
    {id:8,name:'ivan8', username:'ivanchenco8',password:888},
    {id:9,name:'ivan9', username:'ivanchenco9',password:999},
    {id:10,name:'ivan10', username:'ivanchenco10',password:1000}
];

// let user0=users[0];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);