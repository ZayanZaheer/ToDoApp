const task = document.getElementById("Task");
const pressed = document.getElementById("AddTask");

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

    // We are getting the number of list item elements and then increasing them by one. And using that as the task number.
    let id = document.querySelectorAll("li").length + 1;
    console.log(id);
    
    Taskcheckbox.type = "checkbox";
    Taskcheckbox.classList.add("Task");
    Taskdesc.textContent = task.value;
    Taskdesc.setAttribute("for", `Task${id}`);
    Editbtn.type = "button";
    Editbtn.textContent = "Edit";
    Editbtn.classList.add("Edit");
    Editbtn.onclick = function() {Edit(`Task${id}`)}
    Deletebtn.type = "button";
    Deletebtn.textContent = "Delete";
    Deletebtn.classList.add("Delete");
    Deletebtn.onclick = function() {Delete(`Task${id}`)}

    li.id = `Task${id}`;

    // Append the elements to the dom
    document.getElementById("Tasks").appendChild(li)
    document.getElementById(`Task${id}`).appendChild(Taskcheckbox);
    document.getElementById(`Task${id}`).appendChild(Taskdesc);
    document.getElementById(`Task${id}`).appendChild(Editbtn);
    document.getElementById(`Task${id}`).appendChild(Deletebtn);

    
}

function Edit(taskid){
    // Getiing access to the li element of the task
    const Tasknumber = document.getElementById(taskid);
    // From the li element get access to the label
    const Tasklabel = Tasknumber.querySelector("label");
    // From the lable get the task description of the Task
    const TaskDes = Tasklabel.textContent;

    const input = document.createElement("input"); // Create an text field to made changes.
    input.type = "text";
    input.value = TaskDes; // Give the text field the initial Task
    input.onblur = function(){
        saveTask(taskid, input.value);
    }
    input.onkeydown = function(event){
        if(event.key === "Enter"){
            saveTask(taskid, input.value);
        }
    }
    Tasknumber.replaceChild(input, Tasklabel);
    input.focus();

}

function saveTask(taskid, newText){
    // Getiing access to the li element of the task
    const Tasknumber = document.getElementById(taskid);
    // Get access to the textfield
    const input = Tasknumber.querySelector('input[type="text"]');

    // Create new label with changed Task
    let Label = document.createElement("label");
    Label.textContent = newText;
    Label.setAttribute("for", taskid);

    Tasknumber.replaceChild(Label, input);
}

function Delete(){

}

