// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//
// let x =+prompt('Введіть число:');
// console.log(x);
// if (x !=0) {
//  document.write('Вірно');
// }
// else{
//     document.write('Не вірно');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//let time =+prompt('Введіть годину:');
//console.log(time);
//if (time >0 && time <=15) {
//   document.write('перша частина години');
//}
// else if (time>15 && time<=30){
//     document.write('друга частина години');
// }
// else if (time>30 && time<=45){
//     document.write('3 частина години');
// }
// else if (time>45 && time<=59){
//     document.write('4 частина години');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let date =+prompt('Введіть день місяця:');
// console.log(date);
// if (date >=1 && date <=10) {
//     document.write('перша декада місяця');
// }
// else if (date>10 && date<=20){
//     document.write('друга декада місяця');
// }
// else if (date>20 && date<=31){
//     document.write('3 декада місяця');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//
// let day = prompt('Введіть день тижня');
//
//
// switch (day
//     ) {
//     case '1':
//         document.write('вмитися в понеділок');
//         break;
//     case '2':
//         document.write('причесатися у вівторок');
//         break;
//     case '3':
//         document.write('накраситися у середу');
//         break;
//     case '4':
//         document.write('вибрати сукню у четверг');
//         break;
//     case '5':
//         document.write('піти на побачення у пятницю');
//         break;
//     case '6':
//     case '7':
//         document.write('насолоджуватися уікендом');
//         break;
//
//     default:
//         document.write('це лав???');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// ТУТ НЕ ВПЕВНЕНА, ЩО ЗРОБИЛА ПРАВИЛЬНО((((((!!!!!!!!!!!!
let num = prompt('введи перше число ');

let max = prompt('введи друге число ');

if (num === '4'&& max === '5' ) {
        document.write('5 максимальне число');
  } else if (num === max) {
    document.write('числа рывны');
}


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//     Footer

// let x=(prompt()||"default");
// console.log(x);