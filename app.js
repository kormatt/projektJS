const list = document.getElementById("list");
const input = document.getElementById("todo");


const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST=new Array(), id=0;


function addToDo(text, id, done, trash){    
    if(trash){ return; }    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${text}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        input.value = "";
        if(toDo){
            addToDo(toDo, id, false, false);            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });            
            id++;
        }        
    }
});
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}


function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);    
    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
});


















