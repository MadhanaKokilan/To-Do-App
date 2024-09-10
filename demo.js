var userInput=document.getElementById("inputText")
var ul = document.getElementById("listContainer")
function add() {
    if (userInput.value === '') {
        alert('Please enter an Activity in the input')
        return;
    }
    
    else{
        var list = document.createElement('li');
        list.classList.add('checkbox')
        list.textContent = userInput.value
        ul.appendChild(list);
        let deleteContent = document.createElement('i')
        deleteContent.classList.add('fas', 'fa-trash');
        deleteContent.style.cursor = 'pointer';
        list.appendChild(deleteContent);
    }
    userInput.value = ""
    storeAllData();

}
ul.addEventListener("click", function (clear) {
    if (clear.target.tagName === "LI") {
        clear.target.classList.toggle("strikeOut");
        storeAllData();
    }
    else if (clear.target.tagName === 'I') {
        clear.target.parentElement.remove();
        storeAllData();

    }
}, false);  

function storeAllData() {
    localStorage.setItem("data", ul.innerHTML);
    
    
}

function showAllData() {
    ul.innerHTML = localStorage.getItem("data");
}
showAllData();