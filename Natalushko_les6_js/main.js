// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let h='hello world';
// console.log(h.length);
// let h1='lorem ipsum';
// console.log(h1.length);
// let h11='javascript is cool';
// console.log(h11.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let h='hello world';
// let to=h.toUpperCase();
// console.log(to);
//
// let h1='lorem ipsum';
// let to1=h1.toUpperCase();
// console.log(to1);
//
// let h11='javascript is cool';
// let to2=h11.toUpperCase();
// console.log(to2);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let h='HELLO WORLD';
// let to=h.toLowerCase();
// console.log(to);
//
// let h1='LOREM IPSUM';
// let to1=h1.toLowerCase();
// console.log(to1);
//
// let h2='JAVASCRIPT IS COOL';
// let to2=h2.toLowerCase();
// console.log(to2);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//  let str = ' dirty string   ';
//  console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. let str = 'Ревуть воли як ясла повні';
// let str = 'Ревуть воли як ясла повні';
// let strings= str.split(',');
// console.log(strings);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
const arr=[10,8,-7,55,987,-1011,0,1050,0];
let str=arr.map(value => value.toString());
console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];


// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }