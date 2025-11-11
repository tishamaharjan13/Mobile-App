function changeBackground() {
  const group = document.getElementById("group");
  group.style.backgroundColor = "#3b82f6";
}

function changeContent() {
  document.getElementById("group1").innerHTML = "Hi Everyone!!";
}

function changeImage() {
  const img = document.getElementById("images");
  img.src = "images/1.jpg";
}

function addNumbers() {
  let x, y, z;
  x = 5;
  y = 10;
  z = x + y;
  document.getElementById("addition").innerHTML = `Addition ${x}+${y}: ` + z;
}

function subtractNumbers() {
  let x, y, z;
  x = 10;
  y = 5;
  z = x - y;
  document.getElementById("subtraction").innerHTML =
    `Subtraction ${x}-${y}: ` + z;
}

function multiplyNumbers() {
  let x, y, z;
  x = 5;
  y = 4;
  z = x * y;
  document.getElementById("multiplication").innerHTML =
    `Multiplication ${x}*${y}: ` + z;
}

function divideNumbers() {
  let x, y, z;
  x = 20;
  y = 4;
  z = x / y;
  document.getElementById("division").innerHTML = `Division ${x}/${y}: ` + z;
}

function checkOddEven() {
  let number = document.getElementById("num").value;
  if (number % 2 == 0) {
    document.getElementById("result").innerHTML = number + " is Even.";
  } else {
    document.getElementById("result").innerHTML = number + " is Odd.";
  }
}
