const btn=document.querySelector(".btn-add")
const nameInput=document.querySelector(".input-name")
const surnameInput=document.querySelector(".input-surname")
const text=document.querySelector(".text")


function view(){
    text.innerHTML=""
    const str=JSON.parse(localStorage.getItem('task'))||[]
    str.map((el,idx)=>{
        text.innerHTML+=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center"> 
        <h5 class="loop">${el.name[0]+el.surname[0]}</h5>
        Name: ${el.name}   Surname: ${el.surname}</span>
        <button class="btn del-btn btn-danger">delete</button></li>`
        // console.log(el);
         
    })
   deleted()
        //  view()
   
}
view()

btn.addEventListener('click',()=>{
    filter()
})

nameInput.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        if(nameInput.value===""){
            filter()
        }else{
            if(surnameInput.value===""){
                surnameInput.focus()
            }else{
                getVin()
                nameInput.focus()
            }
        }
    }
})

surnameInput.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        if(surnameInput.value===""){
            filterTwo()
        }else{
            if(nameInput.value===""){
                nameInput.focus()
            }else{
                getVin()
                nameInput.focus()
            }
        }
    }
})

function filter(){
        if(nameInput.value===""){
            nameInput.style.background="#c07070"
            nameInput.focus()
        }else if(surnameInput.value===""){
            surnameInput.style.background="#c07070"
            surnameInput.focus()
        }else{
            getVin()
            nameInput.focus()
        }
}

function filterTwo(){
    if(surnameInput.value===""){
        surnameInput.style.background="#c07070"
        surnameInput.focus()
    }else if(nameInput.value===""){
        // nameInput.style.background="#c07070"
        nameInput.focus()
    }else{
        getVin()
    }
}

function getVin(){
    let tasks=JSON.parse(localStorage.getItem("task"))||[]
    const newTask={
        name:nameInput.value,
        surname:surnameInput.value
    }
    console.log(tasks);
    tasks=[...tasks,newTask]
    localStorage.setItem("task",JSON.stringify(tasks))
    view() 
    nameInput.value=""
    surnameInput.value=""
    surnameInput.style.background=""
    nameInput.style.background=""
}

function deleted(){
    let tasks=JSON.parse(localStorage.getItem("task"))||[]
    const delBtn=document.querySelectorAll(".del-btn")
    delBtn.forEach((btn,idx)=>{
        btn.addEventListener("click",()=>{
            tasks=tasks.filter((li,index)=>{
            if(index!==idx){
            return li}
        })
        console.log(tasks);
    localStorage.setItem('task',JSON.stringify(tasks))
    view()
    })
    })
}
