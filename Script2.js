const task = document.getElementById("Task");
const pressed = document.getElementById("AddTask");
let TaskNum = 2;
function CreateTask(){

    //Create the Element for the task
    //Create the checkbox
    let Taskcheckbox = document.createElement("input");
    //Create the label
    let Taskdesc = document.createElement("label");
    // Create the Edit button
    let Editbtn = document.createElement("button");
    // Create the Delete button
    let Deletebtn = document.createElement("button");
    // Create a li
    let li = document.createElement("li")

    // Give the elements Attributes
    Taskcheckbox.type = "checkbox";
    Taskcheckbox.name = "name";
    Taskcheckbox.classList.add("Task");
    Taskdesc.textContent = task.value;
    Taskdesc.setAttribute("for", "Task")
    Editbtn.type = "button";
    Editbtn.textContent = "Edit";
    Editbtn.classList.add("Edit")
    Editbtn.onclick = Edit(`Task${TaskNum}`);
    Deletebtn.type = "button";
    Deletebtn.textContent = "Delete";
    Deletebtn.classList.add("Delete");
    Deletebtn.onclick = Delete(`Task${TaskNum}`);

    li.id = `Task${TaskNum}`;

    // Append the elements to the dom
    document.getElementById("Tasks").appendChild(li)
    document.getElementById(`Task${TaskNum}`).appendChild(Taskcheckbox);
    document.getElementById(`Task${TaskNum}`).appendChild(Taskdesc);
    document.getElementById(`Task${TaskNum}`).appendChild(Editbtn);
    document.getElementById(`Task${TaskNum}`).appendChild(Deletebtn);

    TaskNum++;
}

function Edit(Taskid){
    

}
function Delete(){

}

