// Clock
function updateClock(){
    const now = new Date();
    document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}
setInterval(updateClock,1000);

// Theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

// Todo List
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTasks(){
    const list = document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        const li=document.createElement("li");
        li.innerHTML=
        `${task}
        <button onclick="deleteTask(${index})">❌</button>`;
        list.appendChild(li);
    });
}

function addTask(){
    const input=document.getElementById("taskInput");

    if(input.value==="") return;

    tasks.push(input.value);

    saveTasks();
    renderTasks();

    input.value="";
}

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    renderTasks();
}

renderTasks();

// Calculator
function calculate(){
    const n1=Number(document.getElementById("num1").value);
    const n2=Number(document.getElementById("num2").value);

    document.getElementById("result").innerText=
    "ผลลัพธ์ = "+(n1+n2);
}

// Quotes
function quote(){

const quotes=[
"ความพยายามไม่เคยทรยศใคร",
"ทำวันนี้ให้ดีที่สุด",
"เริ่มช้าดีกว่าไม่เริ่ม",
"ทุกความสำเร็จเริ่มจากก้าวแรก"
];

const random=
quotes[Math.floor(Math.random()*quotes.length)];

document.getElementById("quoteText").innerText=random;

}
