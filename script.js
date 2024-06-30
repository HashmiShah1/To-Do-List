const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
    if (inputBox.value === '') {
        alert('you must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Where this li should be displayed
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //\u00d7 is the cross icon
        li.appendChild(span);
    }
    inputBox.value = ""; // type add k bad input box khali ho jai
    saveData(); // jab b user add kry data to wo idr save ho jai
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") { // click kidr kia hy pehly ye ye check kry ga
        e.target.classList.toggle("checked"); // check class me change kr dy
        saveData(); //add task me b ye save krhy
    } else if
        (e.target.tagName === "SPAN") { // agar span pr click kia to wo parent element ko delete kr dega
        e.target.parentElement.remove();
        saveData(); // task delete pr ye remove kr dy
    }
}, false);

// for storing data in the browser memory use this code

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); //listContainer me ye data store ho jai
}

// website again open krny pr b ye data nzar ay hamain

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();