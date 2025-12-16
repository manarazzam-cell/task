const input = document.getElementById("Input");
const list = document.getElementById("List");
const addBtn = document.getElementById("addBtn");
const app = document.querySelector(".task");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerText = text;
    li.addEventListener("click", () => {
        li.remove();
    });
    list.appendChild(li);
    input.value = "";
};
 