const addBtn = document.querySelector("#add_btn");
const rmBtn = document.querySelector("#rm_btn");

const addTask = function () {
	//cache DOM
	let li = document.createElement("li");
	let input = document.querySelector("#task").value;
	let t = document.createTextNode(input);
	
	//add text to <li> element
	li.appendChild(t);
	if (input === "") {
		return null;
	} else { 
		//access <ul id="list"> and nest created <li> element
		document.querySelector("#list").appendChild(li);
	};

	li.setAttribute("id", "taskitem")
	//once <li> is added, the <input type="text" id="task"> field empties
	document.querySelector("#task").value = ""
};



addBtn.onclick = addTask;

document.querySelector("#task").addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		addBtn.onclick(addTask);
	}
});

list.addEventListener("click", function(ev) {
	ev.target.tagname = "LI";  
  ev.target.classList.toggle("checked");
})

const rmContent = function () {
	let container = document.getElementById("list");
  let elements = container.getElementsByClassName("checked");

  while (elements[0]) { 
    elements[0].parentNode.removeChild(elements[0]);
  }
}

rmBtn.onclick = rmContent;



