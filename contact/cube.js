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

function hide(){
  var page1 = document.getElementById('page-1');
  var page2 = document.getElementById('page-2');
  page1.classList.add("hide");
  page2.classList.remove("hide");
}
function hide2(){
  var page1 = document.getElementById('page-1');
  var page2 = document.getElementById('page-2');
  page2.classList.add("hide");
  page1.classList.remove("hide");
}
