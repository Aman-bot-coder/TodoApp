let todolist = [{}];


let getItem = localStorage.getItem('Items');
if(getItem!=undefined){
    todolist = JSON.parse(getItem);
}else{
    todolist = [{item:'Add Your Text Here',date:'Enter your date here'}];
}
displayItem();

function addTodo() {
    let inputElement = document.querySelector('#input-1');
    let data = inputElement.value;
    console.log(data);
    let dateElement = document.querySelector('#inputdate');
    let datee = dateElement.value;
    todolist.push({ item: data, date: datee });
    inputElement.value = '';
    dateElement.value = '';
    displayItem();
    localStorage.setItem('Items' ,JSON.stringify(todolist));
}
function displayItem() {
    let todo_con = document.querySelector('.todo-container')
    let newHtml = '';

    for (let i = 0; i < todolist.length; i++) {
        let { item, date } = todolist[i];
        newHtml += `
            <span>${item}</span>
            <span>${date}</span>
            <button  class="delete" onclick = "todolist.splice(${i},1);
            displayItem();">Delete</button>
            `
    }
    todo_con.innerHTML = newHtml;
    
}

