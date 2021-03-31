function padStart(str, number, filler) {
  if (str && str.length > number) return str;
  let stringLength = number - str.length;
  let finalString = "";
  if (filler) {
    let iterationAmount = Math.ceil(stringLength / filler.length);
    for (let i = 0; i < iterationAmount; i++) {
      finalString += filler;
    }
    if (finalString.length !== stringLength) {
      finalString = finalString.slice(0, stringLength);
    }
  } else {
    for (let i = 0; i < stringLength; i++) {
      finalString += " ";
    }
  }
  finalString += str;

  console.log(finalString);
}
padStart("ffff", 10, "hhhhhhhhhhhhhhh");

function toPrecision(number, digits) {
  if (typeof number !== "number" || digits <= 0) {
    return Error("Something wrong");
  }
  if (!digits) return number.toString();

  let formattedNumber = number.toString().split(""),
    finalNumber = "",
    counter = 1,
    firstIntIndex = 0,
    lastIndex = 0,
    dotIndex = 0;
  for (let i = 0; i < formattedNumber.length; i++) {
    if (formattedNumber[i] === ".") dotIndex = i;
    if (i > dotIndex && Number(formattedNumber[i]) && counter <= digits) {
      finalNumber += formattedNumber[i];
      if (digits === counter) {
        lastIndex = i;
        break;
      }
      counter++;
    }
  }
  console.log(Number(number.toString().slice(0, dotIndex + lastIndex)));

  if (finalNumber.length < digits) {
    let zeroLength = digits - finalNumber.length;
    for (let j = 0; j < zeroLength; j++) {
      finalNumber = finalNumber + "0";
    }
    console.log(finalNumber);
  }
}
toPrecision(87654, 6);
