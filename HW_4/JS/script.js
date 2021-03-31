// first task

function smile(string, reiteration) {
  return string.repeat(reiteration);
}
console.log(smile("laugh", 2));

const smile2 = function (string, reiteration) {
  return string.repeat(reiteration);
};
console.log(smile2("laugh", 4));

const smile3 = (string, reiteration) => string.repeat(reiteration);
console.log(smile3("laugh", 6));

const smile4 = new Function(
  "string",
  "reiteration",
  "return string.repeat(reiteration)"
);
console.log(smile4("laugh", 10));

// second task

function getMin(...numbers) {
  return Math.min(...numbers);
}
console.log(getMin(2, 3, 4, 5, 6));

const getMin2 = function (...numbers) {
  return Math.min(...numbers);
};
console.log(getMin2(5, 7, 3, 9));

const getMin3 = (...numbers) => Math.min(...numbers);
console.log(getMin3(1, 21, 11));

const getMin4 = new Function("...numbers", "return Math.min(...numbers)");
console.log(getMin4(455, 66, 99, 83));

// third task

function buildPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let newPyramid = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      j >= n + 1 - i && j <= n - 1 + i
        ? (newPyramid += "#")
        : (newPyramid += "-");
    }
    console.log(newPyramid);
  }
}
buildPyramid(5);

const buildPyramid2 = function (n) {
  for (let i = 1; i <= n; i++) {
    let newPyramid = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      j >= n + 1 - i && j <= n - 1 + i
        ? (newPyramid += "#")
        : (newPyramid += "-");
    }
    console.log(newPyramid);
  }
};
buildPyramid2(8);

const buildPyramid3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let newPyramid = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      j >= n + 1 - i && j <= n - 1 + i
        ? (newPyramid += "#")
        : (newPyramid += "-");
    }
    console.log(newPyramid);
  }
};

buildPyramid3(11);

const buildPyramid4 = new Function(
  "n",
  `for (let i = 1; i <= n; i++) {
	let newPyramid = "";
	for (let j = 1; j <= (2 * n - 1); j++) {
		(j >= n + 1 - i && j <= n - 1 + i) ? newPyramid += '#' : newPyramid += '-';
	}
	console.log(newPyramid);
}`
);

buildPyramid4(14);

// fourth task

function unsplit(array) {
  let newArr = array.reduce((acc, el) => {
    acc.push(...el);
    return acc;
  }, []);
  return newArr;
}
console.log(
  unsplit([
    [1, 2, 3, ],
    [6, 7, 8],
    [10, 11, 12],
  ])
);

const unsplit2 = function (array) {
  let newArr = array.reduce((acc, el) => {
    acc.push(...el);
    return acc;
  }, []);
  return newArr;
};
console.log(
  unsplit2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);

const unsplit3 = (array) => {
  let newArr = array.reduce((acc, el) => {
    acc.push(...el);
    return acc;
  }, []);
  return newArr;
};
console.log(
  unsplit3([
    [1],
    [2],
    [34],
    [13, 14],
  ])
);

const unsplit4 = new Function(
  "array",
  `let newArr = array.reduce((acc, el) => {
	acc.push(...el);
	return acc;
}, [])
return newArr;`
);
console.log(
  unsplit4([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);
