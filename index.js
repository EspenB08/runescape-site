function showtext() {
  var checkbox = document.getElementById("feedback");
  let textcontainer = document.getElementById("loginContainer");
  if (checkbox.checked === false) {
    textcontainer.style.display = "block";
  } else {
    textcontainer.style.display = "none";
  }
}
