var addItemBtn = document.getElementById('add-item'); // button
var input = document.getElementById('input-item'); // input
var listItems = document.getElementById('list-items'); // ul
console.log(addItemBtn);
addItemBtn.addEventListener("click", createListItem);
function createListItem(){
  var list = document.createElement("li"); // list item
  var deleteItemBtn = document.createElement("button");
  var doneItemBtn = document.createElement("button");
  var itemText = document.createElement("span");
  itemText.appendChild(document.createTextNode(input.value));
  // CREATING AND ATTACHING ACTUAL LIST ITEM VALUE
  list.appendChild(itemText);
  listItems.appendChild(list);
  input.value = "";
  // delete button attachment
  //deleteItemBtn.appendChild(document.createTextNode("X"));
  deleteItemBtn.innerHTML = "<span>X</span>";
  list.appendChild(deleteItemBtn);
  // add done button in html
  doneItemBtn.innerHTML = "<span>Done</span>";
  list.appendChild(doneItemBtn);
  // adding event listeners
  // FOR DONE
  doneItemBtn.addEventListener("click", setItemAsDone);
  // FOR DELETE
  deleteItemBtn.addEventListener("click", deleteListItem);
  // adding model functions
  function deleteListItem() {
    deleteItemBtn.parentNode.parentNode.removeChild(list);
  }
  function setItemAsDone() {
    console.log(list);
    list.firstElementChild.innerHTML = "<del>"+list.firstElementChild.innerHTML+"</del>"
}

}
