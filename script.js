const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("sub");
const multiply = document.getElementById("mul");
const divide = document.getElementById("divide");
const decimal = document.getElementById("dec");

const input = document.getElementById("input");

// when clicked any number button it will display the number on the input field
one.addEventListener("click", () => {
  input.value += 1;
});

two.addEventListener("click", () => {
  input.value += 2;
});
three.addEventListener("click", () => {
  input.value += 3;
});
four.addEventListener("click", () => {
  input.value += 4;
});
five.addEventListener("click", () => {
  input.value += 5;
});
six.addEventListener("click", () => {
  input.value += 6;
});
seven.addEventListener("click", () => {
  input.value += 7;
});
eight.addEventListener("click", () => {
  input.value += 8;
});
nine.addEventListener("click", () => {
  input.value += 9;
});
zero.addEventListener("click", () => {
  input.value += 0;
});

//when clicked on plus button it will display the number on the input field
function display(value) {
  input.value += value;
}

//when clicked on equal button it will display the result
equal.addEventListener("click", () => {
  input.value = eval(input.value);
});
//when clicked on clear button it will clear the input field
clear.addEventListener("click", () => {
  input.value = "";
});
//when clicked on delete button it will delete the last number
del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
