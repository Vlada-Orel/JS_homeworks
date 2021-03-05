// 1st
// let helloWorld = ["Hello,", "world", "!"];
// let word = "";
// for (var i = 0; i < helloWorld.length; i++) {
//   word = word + helloWorld[i] + " ";
// }
// console.log(word);

// 2nd.1
// let lang = "en";
// let arr = "";
// // if (lang == "ru") {
// //   arr = [
// //     "Понедельник",
// //     "Вторник",
// //     "Среда",
// //     "Четверг",
// //     "Пятница",
// //     "Суббота",
// //     "Воскресенье",
// //   ];
// // } else if (lang == "en") {
// //   arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // }
// // console.log(arr);

// 2nd.2
// let lang = "en";
// let arr = "";
// switch (lang) {
//   case "en":
//     arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     break;
//   case "ru":
//     arr = [
//       "Понедельник",
//       "Вторник",
//       "Среда",
//       "Четверг",
//       "Пятница",
//       "Суббота",
//       "Воскресенье",
//     ];
//     break;
// }
// console.log(arr);

// 2nd.3
// let lang = "en";
// let arr = "";
// let days = [
//   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//   [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ],
// ];
// console.log(
//   lang == "en" ? (arr = days[0]) : lang == "ru" ? (arr = days[1]) : (arr = "")
// );

// 3rd

function entranceNumberCalculate() {
  let floors = prompt("Сколько в доме этажей?");
  if (!floors) return;
  if (
    floors.trim().length == 0 ||
    !parseInt(floors) ||
    (parseInt(floors) && parseInt(floors) < 1) ||
    (parseInt(floors) && parseInt(floors) > 25) ||
    parseInt(floors) % 1 != 0
  ) {
    alert("Введите число этажей от 1 до 25");
    entranceNumberCalculate();
  } else {
    let entrances = prompt("Сколько в доме подъездов?");
    if (!entrances) return;
    if (
      entrances.trim().length == 0 ||
      !parseInt(entrances) ||
      (parseInt(entrances) && parseInt(entrances) < 1) ||
      (parseInt(entrances) && parseInt(entrances) > 10) ||
      parseInt(entrances) % 1 != 0
    ) {
      alert("Введите число подъездов от 1 до 10");
      entranceNumberCalculate();
    } else {
      let apartments = prompt("Сколько на лестнечной площадке квартир?");
      if (!apartments) return;
      if (
        apartments.trim().length == 0 ||
        !parseInt(apartments) ||
        (parseInt(apartments) && parseInt(apartments) < 1) ||
        (parseInt(apartments) && parseInt(apartments) > 20) ||
        parseInt(apartments) % 1 != 0
      ) {
        alert("Введите число квартир от 1 до 20");
        entranceNumberCalculate();
      } else {
        let flatsAmount =
          parseInt(floors) * parseInt(entrances) * parseInt(apartments);
        let numberOfFlat = prompt("Введите номер квартиры?");
        if (!numberOfFlat) return;
        if (
          numberOfFlat.trim().length == 0 ||
          !parseInt(numberOfFlat) ||
          (parseInt(numberOfFlat) && parseInt(numberOfFlat) < 1) ||
          (parseInt(numberOfFlat) && parseInt(numberOfFlat) > flatsAmount) ||
          parseInt(numberOfFlat) % 1 != 0
        ) {
          alert("Такого номера квартиры в доме нет");
          entranceNumberCalculate();
        } else {
          let entranceNumber = numberOfFlat / (floors * apartments);
          return Math.ceil(entranceNumber);
        }
      }
    }
  }
}
if (entranceNumberCalculate()) {
  alert(
    "Номер подъезда, в котором находится квартира - " +
      entranceNumberCalculate()
  );
}
