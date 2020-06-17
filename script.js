const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const added = prompt("What would you like to add to the list?")
  
  //increase number of todoes by one
  //let itemcount = document.getElementById("item-count")
  itemCountSpan.innerText = Number(itemCountSpan.innerText)+1
  
  //makes the list element that has the "todo item in it"
  let li = document.createElement("li")
  li.classList.add(classNames.TODO_ITEM)
  let txt = document.createElement("span")
  txt.classList.add(classNames.TODO_TEXT)
  txt.textContent = added
  li.append(txt)

  //makes the check box attached to the list
  let box = document.createElement("INPUT")
  box.classList.add(classNames.TODO_CHECKBOX)
  box.setAttribute("type", "checkbox")
  box.addEventListener("click",function(e) {  
    if (e.target.checked) {
      checkedBoxes() 
    } else {
      checkedBoxes() 
    }
  }) 
  
  li.append(box)
 
  //creates and adds delete button
  let deletebutton = document.createElement("button")
  deletebutton.classList.add(classNames.TODO_DELETE)
  deletebutton.innerText = "Delete"

  //creates an event listener
  deletebutton.addEventListener("click", function(e){
    list.removeChild(li)
    itemCountSpan.innerText = Number(itemCountSpan.innerText)-1
    checkedBoxes()
  })

  li.append(deletebutton)

  //adds the li item to the list set
  list.append(li)
  checkedBoxes();
} 

function checkedBoxes(){
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length
  uncheckedCountSpan.innerText = Number(itemCountSpan.innerText) - checkedBoxes
}
