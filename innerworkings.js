window.addEventListener("load", loadHandler);

function loadHandler() {
  const buttonElement = document.getElementById("myBtn");
  buttonElement.addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hello World";
  });
}
