const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")


item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addToDo(this.value)
        this.value = "";
    }
}
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = ` 
        ${item}
        <div id="edit"><i class="fa-regular fa-pen-to-square"></i></div>
        <div id="delete"><i class="fas fa-times"></i></div>
    `;

    listItem.querySelector("#delete").addEventListener("click", function () {
        listItem.remove()
    }
    )
    const editButton = document.querySelector("#edit")
    editButton.querySelector = "#edit";
    editButton.addEventListener("click", function () {

        editTask(listItem, item)
    }
    )


    toDoBox.appendChild(listItem);
    listItem.appendChild(editButton);
}

function editTask(listItem, currentText) {
    const editText = prompt('Edit task:', currentText);
    if (editText !== null) {
        listItem.textContent = editText;




        const editButton = document.querySelector("#edit")
        editButton.querySelector = "#edit";
        editButton.addEventListener("click", function () {

            editTask(listItem)
        });


        listItem.innerHTML = "";
        listItem.appendChild(document.createTextNode(editText));
        listItem.appendChild(editButton);

    }

}