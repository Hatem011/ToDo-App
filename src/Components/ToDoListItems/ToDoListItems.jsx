import React from 'react'
import Checkbox from "../elements/Checkbox.js";

export default function ToDoListItems(props) {
    const {todDoList}=props
    const todoItem=todDoList.map((todo,index)=>
    {
      return(
        <div key={todo.id} className="mb-2 mx-auto w-100 py-2 d-flex">
<div className='todoCheck'>
<label>
            <Checkbox
              className="checkbox-element"
              checked={todo.isCompleted}
              size={20}
              checkedColor="#2e3238"
              uncheckedColor="#343a40"
              hoverColor="#343a40"
              onChange={(event) => props.handleOnChange(event, index)}
            />
          </label>
</div>
<div className='d-flex justify-content-between flex-grow-1 px-3'>
  <div className='todoTitle'>
  <span style={{textDecoration:todo.isCompleted? "line-through": "none"}}>
  {todo.title}
</span>
  </div>
<div className="icon">
  <i onClick={()=>{props.editItem(index)}} className='fa fa-edit mx-3'></i>
  <i onClick={()=>props.deleteItem(index)} className='fa fa-trash'></i>
</div>
</div>
        </div>
      )
    })
  return (
    <>
    <div className="mt-2 w-100">
<hr/>
{todDoList.length === 0 &&(
 <h2>
 There Are No Tasks To Do 
</h2>
)  
      }
      {todDoList.length > 0 &&todoItem}
    </div>
   
    </>
  )
}
