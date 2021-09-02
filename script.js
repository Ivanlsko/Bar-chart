//const valuesArr = [3, 1, 19, 6, 16, 18, 7, 30, 21, 6, 2, 6, 7, 19, 20, 8, 21, 2, 20, 11, 30, 16, 2, 18, 4, 17, 22, 12, 19, 4, 2, 22, 2, 16, 28, 23, 25, 10, 11, 19];
const valuesArr = [];
console.log(valuesArr);
let newDiv;
let theNumber;
let randomNumber;
let arrLength = 0;

function generateRanNumber() {
  return Math.floor(Math.random() * 32);
}

loop();

function loop() {
  arrLength++;
  displayBars;
  if (arrLength < 40) {
    randomNumber = generateRanNumber();
    valuesArr.push(randomNumber);
    console.log(valuesArr);
    setTimeout(loop, 100);
  } else {
    randomNumber = generateRanNumber();
    valuesArr.push(randomNumber);
    valuesArr.shift();
    console.log(valuesArr);
    setTimeout(loop, 100);
  }
}

//function addValueToArr() {}

function displayBars() {
  console.log("i am connected");
  valuesArr.forEach((e) => {
    newDiv = document.createElement("div");
    theNumber = e;
    document.querySelector("#chart").appendChild(newDiv);
    addId();
  });
}

function addId() {
  newDiv.setAttribute("class", "bar");
  newDiv.style.height = `${theNumber}vw`;
}
