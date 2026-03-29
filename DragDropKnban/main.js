// kanban-list
// kanban-task

const lists = document.querySelectorAll('.kanban-list');
const tasks = document.querySelectorAll('.kanban-task');
let draggedTask = null;

tasks.forEach(task=>
    {
task.addEventListener('dragstart',dragStart);
    
task.addEventListener('dragend',dragEnd);
});
lists.forEach(list=>
    {
list.addEventListener('dragover',dragOver);
list.addEventListener('drop',drop);
list.addEventListener('dragenter',dragEnter)
list.addEventListener('dragleave',dragLeave)
})
// Kanban Lists
function dragOver(e)
{
    console.log("drage over");
e.preventDefault();
}
function drop(e)
{
    console.log("drop");
  e.currentTarget.appendChild(draggedTask);
// e.currentTarget.appendChild(draggedTask);
}

function dragEnter(e)
{
    console.log("enter");
    console.log("Parent : ",e.currentTarget.closest(".kanban-column"));
    const parent = e.currentTarget.closest(".kanban-column");
    parent.classList.add("over");
    
}

function dragLeave(e)
{
    const parent = getParentColumn(e.currentTarget);
    parent.classList.remove("over");
}
// end
function getParentColumn(data)
{
return data.closest(".kanban-column");
}
// Tasks
function dragStart(e)
{
 draggedTask = e.target;
 console.log(draggedTask);
}

function dragEnd(e)
{
console.log("dropped");
draggedTask = null;

// kanban-list
const parent_Task = e.currentTarget.closest(".kanban-list");
console.log("Parent task : ",parent_Task);

const parent =getParentColumn(parent_Task);
parent.classList.remove("over");
}
// end Tasks