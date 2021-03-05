// 1st
// var step;
// for (step = 0; step < 10; step++) {
//   if (step % 2 == 0) console.log("Fiz");
//   else if (step % 3 == 0) console.log("FizBuz");
//   else console.log("Buz");
// }

// 2nd
// var paper = (1200 * 8) / 500;
// console.log(paper - (paper % 1) + 1);

// 3rd
// var a = 6000;
// var hours = a / 3600;
// var mins = hours * 60 - (hours - (hours % 1)) * 60;
// var sec = (mins - (mins - (mins % 1))) * 60;
// console.log(`Hours ${Math.floor(hours)}, mins ${Math.floor(mins)}, sec ${sec}`);

// 4th
let c = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
let currentMonth = c[date.getMonth()];
console.log(currentMonth);
