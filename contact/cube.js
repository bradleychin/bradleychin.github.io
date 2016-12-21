function rotateSideways() {
  var cubeBox = document.getElementById('cube');

  var upButton = document.getElementById('sidewaysButton');
  if (upButton.innerHTML == "Start") {
    cubeBox.classList.add("rotatex");
    upButton.innerHTML = "Pause";
  } else if (upButton.innerHTML == "Pause") {
    cubeBox.classList.add("pause");
    upButton.innerHTML = "Keep going";
  } else {
    cubeBox.classList.remove("pause");
    upButton.innerHTML = "Pause";
  }
}
function rotateUp() {
  var wrapBox = document.getElementById('wrap');

  var upButton = document.getElementById('upButton');
  if (upButton.innerHTML == "Start") {
    wrapBox.classList.add("rotatey");
    upButton.innerHTML = "Pause";
  } else if (upButton.innerHTML == "Pause") {
    wrapBox.classList.add("pause");
    upButton.innerHTML = "Keep going";
  } else {
    wrapBox.classList.remove("pause");
    upButton.innerHTML = "Pause";
  }
}
