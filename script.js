const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
const inputNewTask = document.querySelector('.new-task input');


buttonNewTask.addEventListener('click', addTask);


function addTask() {
    event.preventDefault();

    const taskItem = document.createElement('label');
    taskItem.classList.add('task-item');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';

    const fakeCheckboxInput = document.createElement('span');
    fakeCheckboxInput.classList.add ('fake-checkbox');

    const fakeIcon = document.createElement('i');
    fakeIcon.classList.add('fa');
    fakeIcon.classList.add('fa-check');

    const textItem = document.createElement('p');
    textItem.innerText = inputNewTask.value;

    const buttonItem = document.createElement('button');

    const trashItem = document.createElement('i');
    trashItem.classList.add('fa-solid');
    trashItem.classList.add('fa-trash'); 

    taskBox.appendChild(taskItem);
    taskItem.appendChild(checkboxInput);
    taskItem.appendChild(fakeCheckboxInput);
    fakeCheckboxInput.appendChild(fakeIcon);
    taskItem.appendChild(textItem);
    taskItem.appendChild(buttonItem);
    buttonItem.appendChild(trashItem);

    trashItem.addEventListener('click', deleteTask);
    checkboxInput.addEventListener('click', completeTask);

    inputNewTask.value = '';
}

function deleteTask(e) {
    e.target.parentElement.parentElement.remove();

}

function completeTask(e) {
   e.target.parentElement.classList.toggle('complete')
}
