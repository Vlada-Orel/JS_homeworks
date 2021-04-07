function addListener(type, handler) {
  let keyNames = type.split("+");
  let keyEvents = [];
  document.addEventListener("keydown", function (event) {
    event.preventDefault();
    keyEvents.push(event.key);
    let namesLength = keyNames.length;
    let eventsLength = keyEvents.length;
    if (
      namesLength == eventsLength &&
      keyEvents.join(" ") === keyNames.join(" ")
    ) {
      handler(event);
    }
  });
  document.addEventListener("keyup", function (event) {
    event.preventDefault();

    for (let keyName of keyNames) {
      if (event.key === keyName) {
        keyEvents = [];
      }
    }
  });
}

addListener("p", function (event) {
  console.log("Hello, world");
});
addListener("Control+p", function (event) {
  console.log("Hello!");
});
