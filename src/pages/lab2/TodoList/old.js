const list_todo = document.getElementById("list_todo");
let Rez = document.getElementById("Rez");
document.getElementById("Add").onclick = function(){
    
};

class ToDo{
    static loadDom(){
        document.addEventListener('DOMContentLoaded',() => {
            const listTask = localStorage.getItem('tasks')
            ToDo.createElement(listTask)
        })
    }
    static createElement(text){
        const root = document.getElementById('data')
        const p = document.createElement('p')
        p.textContent = text
        p.classList.add('task')
        if (root) {
            root.appendChild(p)
        }
    }

    static handlerTasks(){
        const button = document.getElementById('Add')
        button.addEventListener('click',()=>{
            const task = document.getElementById('list_todo').value
            ToDo.createElement(task)
            localStorage.setItem('tasks',task)
        })
    }
}

ToDo.handlerTasks()
ToDo.loadDom()