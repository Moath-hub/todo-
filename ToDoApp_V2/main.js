

var addTaskB = document.getElementById('AddTask')
var alltasks = document.getElementById('Main_Area')

function createTask(txt) {
    const taskcontainer = document.createElement('div');
    var title = document.createElement('h4');
    var deleteButton = document.createElement('i');
    var EditButton = document.createElement('i');
    
    EditButton.className = 'fa-solid fa-pen-to-square'
    deleteButton.className = 'fa-solid fa-trash-can'

    title.textContent = txt;

    title.style = `
    background-color: #c7c4c4cc;
    width: 450px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    
    `
    deleteButton.style = `
    border-width: 0;
    height: 20px;
    width: 20px;
    font-size: 20px;
    margin-right: 5px ;
    position: relative;
    top: -48px;
    left: 380px;
    
    `
    EditButton.style = `
    border-width: 0;
    height: 20px;
    width: 20px;
    font-size: 20px;
    margin-right: 5px ;
    position: relative;
    top: -48px;
    left: 380px;
    
    `

    taskcontainer.style = `
    background-color: #c7c4c4cc;
    width: 450px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    `

    taskcontainer.className = 'task'
    taskcontainer.appendChild(title);
    taskcontainer.appendChild(EditButton);
    taskcontainer.appendChild(deleteButton);

    taskcontainer;
    return taskcontainer;

}
function AddTask(tasktxt) {
    
    const task = document.createElement('div');
    task.style = `
    position: relative;
    background-color: rgb(255, 255, 255);
    width: 450px;
    height: 60px;
    margin-left: 30px;
    `
    task.className = 'task'
    
    

    task.appendChild(createTask(tasktxt));
    alltasks.appendChild(task);
    alltasks[alltasks.children.length - 2].appendChild(task);
}
addTaskB.onclick = function() {
    AddTask()
    console.log('added');
   
    
}
