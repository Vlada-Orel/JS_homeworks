function func() {
  let count = 0;
  return function (val) {
    count++;
    if (count == 1) {
      this.val = val;
    } else {
      this.val += val;
    }
    return this.val;
  };
}
let makeCount = func();
console.log(makeCount(2));
console.log(makeCount(4));
console.log(makeCount(3));
console.log(makeCount(6));

function GetNumbers() {
  let counter = 0;
  return function (a) {
    counter += a;
    return counter;
  };
}

let done = GetNumbers();
console.log(done(5));
console.log(done(5));
console.log(done(5));
console.log(done(5));
console.log(done(5));

function getUpdatetArr() {
  let arr = [];
  return function (item) {
    if (!item) {
      arr = [];
    } else {
      arr.push(item);
    }
    return arr;
  };
}

let add = getUpdatetArr();
console.log(add("gdhchd"));
console.log(add(7654));
console.log(add({ dff: "gsfd" }));
console.log(add());
console.log(add(["gdf"]));
console.log(add(564783));
console.log(add(true));
