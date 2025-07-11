let val = document.getElementById("input-box");
let there = document.getElementById("task");

function add(){
    if (val === ""){
        alert("you should write something!");
    }
    else{
        let new_ele = document.createElement("li");
        new_ele.innerText = val.value;
        there.appendChild(new_ele);
        let another = document.createElement("span");
        another.innerHTML = "\u00d7";
        new_ele.appendChild(another);
    }
    val.value = ""
    saveData()
}

there.addEventListener("click",function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },false);

function saveData(){
    localStorage.setItem("data", there.innerHTML);
}

function show(){
    there.innerHTML = localStorage.getItem("data");
}

show();