// first task

class CustomString {
  constructor(string) {
    this.string = string;
  }
  reverse() {
    const newArr = [];
    for (let prop of this.string) {
      newArr.unshift(prop);
    }
    return newArr.join("");
  }
  ucFirst() {
    let newString = "";
    for (let i = 0; i < this.string.length; i++) {
      if (i === 0) {
        newString += this.string[i].toUpperCase();
      } else {
        newString += this.string[i];
      }
    }
    return newString;
  }

  ucWords() {
    let stringToArr = this.string.split(" ");
    let stringWithUpper = [];
    stringToArr.forEach((value) => {
      let middleValue = value.charAt(0).toUpperCase() + value.slice(1);
      stringWithUpper.push(middleValue);
    });
    return stringWithUpper.join(" ");
  }
  ucWords_1() {
    let stringToArr = this.string.split(" ");
    let stringWithUpper = stringToArr.map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    return stringWithUpper.join(" ");
  }
}
const myString = new CustomString("hello, world, come back!");
console.log(myString.reverse());
console.log(myString.ucFirst());
console.log(myString.ucWords());
console.log(myString.ucWords_1());

// second task

class Validator {
  checklsEmail(string) {
    var regEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    console.log(regEmail.test(string));
  }
  checklsDomain(string) {
    var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    console.log(regURL.test(string));
  }
  checklsPhone(string) {
    var regPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    console.log(regPhone.test(string));
  }
  checklsDate(string) {
    var regDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    console.log(regDate.test(string));
  }
}
const email = new Validator();
email.checklsEmail("hbjbjbdchsbdchd@inbox.ru");
email.checklsEmail("hbjbjbdchsbdchd@inbox.ru.com.com");
email.checklsDomain("gmail.com");
email.checklsDomain("gmail/com");
email.checklsPhone("+380996172516");
email.checklsPhone("996172516");
email.checklsDate("30.11.2021");
email.checklsDate("30.11.20021");
