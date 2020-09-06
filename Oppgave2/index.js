// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var complete_btn = document.getElementById("complete_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var $ ="";
var elements = document.getElementsByClassName("column");
//get the clear button/refresh
const clear = document.querySelector(".clear");
//get the list of Todo elements
const list =document.getElementById("list");
const list_complete =document.getElementById("completed_list");
const submission_form = document.getElementById("submit_form");
//get the input inside the modal box. 
const title_input = document.getElementById("title");
const description_input = document.getElementById("description");
const author_input = document.getElementById("author");
//get the date of today
const dateElement = document.getElementById("date");
const submit = document.getElementById("submit_button");
//check if some of the todos are done or not. 
const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const LINE_THROUGH ="lineThrough";
const today = new Date();
const options = {weekday:"long",month:"short",day:"numeric"};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
let LIST,id,COMPLETE_LIST;

let data = localStorage.getItem("TODO");
if(data){
LIST=JSON.parse(data);
id= LIST.length;
loadToDO(LIST);

}else{
  LIST = [];
  id=0;
}



document.addEventListener("keyup",function(event){
  if(event.keyCode == 13){
        const title = title_input.value;
        const description = description_input.value;
        const author = author_input.value;
        if(title,description,author){
          addToDO(title,description,author,id,false,false);
          LIST.push({
            title: title,
            description: description,
            author: author,
            id: id,
            date: new Date(),
            done : false,
            trash : false,
          });
          localStorage.setItem("TODO", JSON.stringify(LIST));
          
          id++;
        input.value="";
      }


    }
});



  

document.addEventListener("submit_form",function(event){
  
        const title = title_input.value;
        const description = description_input.value;
        const author = author_input.value;
        if(title,description,author){
          addToDO(title,description,author,id,false,false);
          LIST.push({
            title: title,
            description: description,
            author: author,
            id: id,
            dateAdded: new Date(),
            done : false,
            trash : false,
          });
          localStorage.setItem("TODO", JSON.stringify(LIST));
          
          id++;
        input.value="";
      }
});






list.addEventListener("click", function(event){
    const element = event.target;
    const elementJOB = event.target.attributes.job.value;

    
    
    if(elementJOB == "complete"){
      

      completeToDo(element);

  
  

      
      
      
    
    
}else if(elementJOB == "delete"){
  removeToDo(element);
}

    localStorage.setItem("TODO", JSON.stringify(LIST));


});


clear.addEventListener("click",function(){
  localStorage.clear();
  location.reload();
});


function addToDO(title,description,author, id,done,trash){
  if(trash){return;}
  const dateCreated = new Date();
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH: "";
  const item = `<div class="column"><li class="item"><i class="fa fa-circle-thin co complete_todo ${DONE}" job="complete" id="${id}"></i><p class="text-title ${LINE}" id="text_title_id" title="${title}">${title}</p><p class="text-description ${LINE}" id="text_description_id">${description}</p><p class="text-author ${LINE}" id="text_author_id">${author}</p><p class="text-date">${dateCreated}</p><i class="fa fa-trash-o de trash_todo" job="delete" id="${id}" label="Delete"></i></li></div>`;

  const position = "beforeend";
  list.insertAdjacentHTML(position,item);
  
};







function completeToDo(element){
  
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text-title").classList.toggle(LINE_THROUGH);
  element.parentNode.querySelector(".text-description").classList.toggle(LINE_THROUGH);
  
  LIST[element.id].done ? false : true;
  
  localStorage.setItem("TODO", JSON.stringify(LIST));

}



function removeToDo(element){

  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}





function loadToDO(array){
 array.forEach(function(item){
 

    addToDO(item.title,item.description,item.author,item.id,item.done,item.trash);
   
   
 });
}



     
 





// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  
    modal.style.display = "none";
 
  
}

document.getElementById('submit_button').onclick = function() {
  
    const title = title_input.value;
    const description = description_input.value;
    const author = author_input.value;
    if(title,description,author){
      addToDO(title,description,author,id,false,false);
      LIST.push({
        title: title,
        description: description,
        author: author,
        id: id,
        done : false,
        trash : false,
      });
      
      localStorage.setItem("TODO", JSON.stringify(LIST));
      
      id++;
    input.value="";
  }
  

}



// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "25%";
  }
}







// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

