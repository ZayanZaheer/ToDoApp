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
    Tasknumber.replaceChild(input, Tasklabel); // This is in case no changes are made to the task
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

function Delete(taskid){
    let Tasknumber = document.getElementById(taskid); // This line is accessing the list item element with the tasks id
    if(Tasknumber){
        Tasknumber.parentNode.removeChild(Tasknumber); // 'Tasknumber' refers to the list item with the task id. 'parentNode' refers to the parent of the list item, which is the 'ul' or 'ol' element. 'removeChild(Tasknumber)' means to remove the child list item with the task number from the parent.

        Ammend();

    }

}

function Ammend(){

    // Why Ammend is Necessary
    // When you create a new task, its ID is based on the current number of tasks plus one. For example, if you have three tasks, the next task will have the ID "Task4". This works fine when you are only adding tasks. However, when you delete a task, the sequence of IDs is disrupted.
    
    // For example, consider the following scenario:
    
    // You have three tasks with IDs "Task1", "Task2", and "Task3".
    // You delete "Task2".
    // Now you have "Task1" and "Task3", but no "Task2".
    // If you add a new task at this point, it would get the ID "Task3" again because the new ID is based on the number of tasks plus one. This causes a conflict, as there would be two tasks with the same ID.


    let tasks = document.querySelectorAll("#Tasks li"); // Access the list item in the unordered list element

    tasks.forEach((task, index) => {    // 'task' is the current element being processed. 'index' is the index of the current element

        task.id = `Task${index + 1}` // Set the id of the list element
        
        let newlabel = task.querySelector("label"); //Access the label element to change the attribute of the label
        newlabel.setAttribute("for", `Task${index + 1}`);

        let newEdit = task.querySelector(".Edit"); // Make changes to the edit button
        newEdit.onclick = function() {Edit(`Task${index + 1}`)}

        let newDelete = task.querySelector(".Delete"); // Make chnages to the delete button
        newDelete.onclick = function() {Delete(`Task${index + 1}`)}

    })
}

