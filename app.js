const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === " ") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li"); //creating a html element
    li.innerHTML = inputBox.value; //text inside the list item
    listContainer.appendChild(li); //this li will be displayed
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = " ";
  saveData(); // saved the updated content
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //with the name of data
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
