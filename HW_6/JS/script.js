const studentArr = [
  {
    name: "Сергей",
    surname: "Войлов",
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
  },
  {
    name: "Татьяна",
    surname: "Коваленко",
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
  },
  {
    name: "Анна",
    surname: "Кугир",
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
  },
  {
    name: "Станислав",
    surname: "Щелоков",
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
  },
  {
    name: "Денис",
    surname: "Хрущ",
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
  },
  {
    name: "Татьяна",
    surname: "Капустник",
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
  },
  {
    name: "Максим",
    surname: "Меженский",
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
  },
  {
    name: "Денис",
    surname: "Марченко",
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
  },
  {
    name: "Антон",
    surname: "Завадский",
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3,
  },
  {
    name: "Игорь",
    surname: "Куштым",
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
  },
  {
    name: "Инна",
    surname: "Скакунова",
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
  },
];

class Student {
  static listOfStudents = [];
  constructor(enrollee) {
    Student.listOfStudents.push(enrollee);
    Student.listOfStudents.sort(function (a, b) {
      return b.ratingPoint - a.ratingPoint || b.schoolPoint - a.schoolPoint;
    });
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.calculateID();
  }
  calculateID() {
    for (let i in Student.listOfStudents) {
      if (i > 4) {
        Student.listOfStudents[i].isSelfPayment = true;
      } else {
        Student.listOfStudents[i].isSelfPayment = false;
      }
      Student.listOfStudents[i].id = +i + 1;
    }
  }
}

for (let studentPayLoad of studentArr) {
  new Student(studentPayLoad);
}

console.log(Student.listOfStudents);
