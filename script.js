const valuesArr = [3, 1, 19, 6, 16, 18, 7, 30, 21, 6, 2, 6, 7, 19, 20, 8, 21, 2, 20, 11, 30, 16, 2, 18, 4, 17, 22, 12, 19, 4, 2, 22, 2, 16, 28, 23, 25, 10, 11, 19];
console.log(valuesArr);
let newDiv;
let theNumber;

valuesArr.forEach((e) => {
  newDiv = document.createElement("div");
  theNumber = e;
  document.querySelector("#chart").appendChild(newDiv);
  addId();
});

function addId() {
  newDiv.setAttribute("class", "bar");
  newDiv.style.height = `${theNumber}vw`;
}
