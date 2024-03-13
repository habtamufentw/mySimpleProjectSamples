 
  let todoList=[{name:'make dinner',
dueDate:'2023-08-23'},{name: 'washe dishes',dueDate:'2023-08-23'}];

todoList= JSON.parse(localStorage.getItem('todoList'));
  renedertodoList();
function renedertodoList(){
  let todoLisHTML='';
for(let i=0;i<todoList.length;i++){
  const todoObject=todoList[i];
  const{name,dueDate}=todoObject;
  const html=`
  <div>${name}</div>
   <div> ${dueDate}</div>
    <button onclick="todoList.splice(${i},1);
    renedertodoList();
    " class="delet-btn">Delete</button>
    `;
  todoLisHTML+=html;
  
}
localStorage.setItem('todoList',JSON.stringify(todoList));
document.querySelector('.todolist-pra').innerHTML=todoLisHTML;

}

  function addtodolist(){
    const inputElement=document.querySelector('.js-input-btn');
   let name=inputElement.value;
   const dateInputElement=document.querySelector('.js-input-date');
   const dueDate=dateInputElement.value;
   todoList.push({
    name,
    dueDate
  });
   

   inputElement.value='';
   
   renedertodoList();
  }