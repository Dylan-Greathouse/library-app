// // function uniqueWords(words) {
// //   const codes = {
// //     a: '.-',
// //     b: '-...',
// //     c: '-.-.',
// //     d: '-..',
// //     e: '.',
// //     f: '..-.',
// //     g: '--.',
// //     h: '....',
// //     i: '..',
// //     j: '.---',
// //     k: '-.-',
// //     l: '.-..',
// //     m: '--',
// //     n: '-.',
// //     o: '---',
// //     p: '.--.',
// //     q: '--.-',
// //     r: '.-.',
// //     s: '...',
// //     t: '-',
// //     u: '..-',
// //     v: '...-',
// //     w: '.--',
// //     x: '-..-',
// //     y: '-.--',
// //     z: '--..',
// //   };

// //   const message = [];

// //   words.forEach((item) => {
// //     item.split('').forEach((letter) => {
// //       message.push(codes[letter]);
// //     });
// //     message.push(' ');
// //   });
// //   return message.join('');
// // }

// // const answer = uniqueWords(['gin', 'zen', 'gig', 'msg']);

// // console.log(answer);

// function convert(roman) {
//   const romanInt = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let number = 0;

//   for (let i = 0; i < roman.length; i++) {
//     if (roman[i] === 'I' && roman[i + 1] === 'V') {
//       number += 4;
//       i++;
//     } else if (roman[i] === 'I' && roman[i + 1] === 'X') {
//       number += 9;
//       i++;
//     } else if (roman[i] === 'X' && roman[i + 1] === 'L') {
//       number += 40;
//       i++;
//     } else if (roman[i] === 'X' && roman[i + 1] === 'C') {
//       number += 90;
//       i++;
//     } else if (roman[i] === 'C' && roman[i + 1] === 'D') {
//       number += 400;
//       i++;
//     } else if (roman[i] === 'C' && roman[i + 1] === 'M') {
//       number += 900;
//       i++;
//     } else {
//       number += romanInt[roman[i]];
//     }
//   }
//   return number;
// }

// const answer = convert('CCVIII');

// console.log(answer);
