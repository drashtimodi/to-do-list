const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

// for adding task we have first check the condition for input box 
function addTask() {

    //if else is used for checking the input value is valid or not
    if (inputBox.value === '') {
        alert("You must write something");
    } else {

        //if the condition is false than we have created a vaiable li and the value of li will be value of input 
        //and than we have merge in our ul list

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener('click', function(e) {

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();