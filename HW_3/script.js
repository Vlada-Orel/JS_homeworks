function trim(phrase) {
  if (typeof phrase !== "string") {
    return Error("trim is not a function");
  }
  let newFrase1 = "";
  let newFrase2 = "";
  let counter = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== " ") {
      counter++;
    }
    if (counter > 0) newFrase1 += phrase[i];
  }
  counter = 0;
  let reversedPhrase = newFrase1.split("").reverse().join("");
  for (let j = 0; j < reversedPhrase.length; j++) {
    if (reversedPhrase[j] !== " ") {
      counter++;
    }
    if (counter > 0) newFrase2 += reversedPhrase[j];
  }
  return newFrase2.split("").reverse().join("");
}
console.log(trim(7654));
console.log(trim("Hello, world                     "));
console.log(trim("                 Hello, world                     "));
console.log(trim("                     Hello, world"));

function toLowerCase(str) {
  if (typeof str !== "string") {
    return Error("toLowerCase is not a function");
  }

  let newString = "";

  for (let i = 0; i < str.length; i++) {
    const elementID = str.charCodeAt(i);
    if (elementID > 64 && elementID < 91) {
      newString += String.fromCharCode(elementID + 32);
    } else {
      newString += str[i];
    }
  }
  return newString;
}

console.log(toLowerCase("retTFRhfgtYTffY"));

function Employee(
  id,
  name,
  surname,
  salary,
  workExperience,
  isPrivileges,
  gender
) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary;
  this.workExperience = workExperience;
  this.isPrivileges = isPrivileges;
  this.gender = gender;
  this.getSalaryRate = function () {
    if (this.workExperience < 3 && this.salary <= 200) {
      return `low`;
    } else if (
      this.workExperience >= 3 &&
      this.workExperience < 7 &&
      this.salary > 4000
    ) {
      return `modarate`;
    } else if (this.workExperience >= 7 && this.salary > 7000) {
      return `high`;
    } else {
      return "other type";
    }
  };
}

const employeeObj = new Employee(
  0,
  "Valeriy",
  "Zhmishenko",
  1000,
  10,
  true,
  "male"
);
console.log(employeeObj);

function calculate(p, y) {
  let K = Math.log(Math.pow(p, 2) + Math.pow(y, 3)) + Math.exp(p);
  console.log(K);
}
calculate(3, 8);
