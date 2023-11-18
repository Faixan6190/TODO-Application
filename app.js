var parent = document.getElementById("parent");

function addNote() {
  var noteInput = document.getElementById("noteInput");
  if (noteInput.value.length == 0) {
    alert("Input Field Are Empty");
    return;
  }
}

var cardDiv = document.createElement("div");
cardDiv.setAttribute("class", "card my-3");

var cardHeaderDiv = document.createElement("div");
cardHeaderDiv.setAttribute("class", "card-header");
cardHeaderDiv.innerHTML = "Note";

cardDiv.append(cardHeaderDiv);

var cardBodyDiv = document.createElement("div");
cardBodyDiv.setAttribute("class", "card-body");

cardDiv.append(cardBodyDiv);

var cardTitleh5 = document.createElement("h5");
cardTitleh5.setAttribute("class", "card-title");
cardTitleh5.innerHTML = noteInput.value;

cardBodyDiv.append(cardTitleh5);

var buttonContainer = document.createElement("button");
buttonContainer.setAttribute("class", "mt-3 buttonContainer");
cardBodyDiv.append(buttonContainer);

var editBtn = document.createElement("button");
editBtn.innerHTML = "Edit";
editBtn.className = "btn btn-primary";

var deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete";
deleteBtn.className = "btn btn-danger";
deleteBtn.setAttribute("onclick", "deleteTodo(this)");

buttonContainer.append(editBtn);
buttonContainer.append(deleteBtn);

console.log(cardDiv);
parent.append(cardDiv);
noteInput = "";

function deleteTodo(ele) {
  ele.parentNode.parentNode.parentNode.remove();
}

function deleteAll() {
  parent.innerHTML = "";
}