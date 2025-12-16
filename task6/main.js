  let tasks=[];
const input=document.getElementById("Input"),
list=document.getElementById("List"),
addBtn=document.getElementById("addBtn"),
mode=document.getElementById("mode"),
task=document.querySelector(".task");

addBtn.onclick=function(){
    if(!input.value) return;
    tasks.push(input.value);
    input.value="";
    show();
};

function show(){
    list.innerHTML="";
    tasks.forEach((t,i)=>{
        const li=document.createElement("li");
        li.textContent=t;
        li.onclick=()=>{tasks.splice(i,1);show();}
        list.appendChild(li);
    });
}

 