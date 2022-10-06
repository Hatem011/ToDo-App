import React, { Component } from 'react'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDoListItems from '../ToDoListItems/ToDoListItems'
import "./ToDoList.css"
export default class ToDoList extends Component {
  state={
    toDoList:[],
    newTodo:''
  }
  handleChange=(e)=>{
this.setState({newTodo:e.target.value})
  }
handleSubmit=(e)=>
{
  e.preventDefault()
  let ToDoListLength=this.state.toDoList.length
  if(this.state.newTodo==="")
  {
    return;
  }
  this.setState({
     newTodo:'',
     toDoList:[...this.state.toDoList,
      {
        id:(ToDoListLength += 1),
        title:this.state.newTodo,
        isCompleted:false
      }
   
    ]
})
}
toggleCompleted = (event, index) => {
  const todoCompleted = this.state.toDoList.filter((todo) => {
    if (todo.id === index + 1) {
      todo.isCompleted = event.target.checked;
    }
    return todo;
  });
  this.setState({ todDoList: todoCompleted });
};

deleteItem=(index)=>{
let toDoList=this.state.toDoList
toDoList.splice(index,1)
this.setState({
  toDoList
})
}
editItem=(index)=>{
  const newTodo=prompt("Make Some Changes")
const {toDoList}=this.state
toDoList.filter((todo)=>{
  if(todo.id===index + 1)
  {
    todo.title=newTodo
  }
  return todo
})
this.setState({
  toDoList
})
}
  render() {
    return (
      <>
      <div className="todo-list container d-flex-column pb-4 mt-5 text-white w-50">
<ToDoForm
todDoList={this.state.toDoList}
 newTodo={this.state.newTodo} 
 handleChange={this.handleChange}
  handleSubmit={this.handleSubmit}/>
  <ToDoListItems 
  todDoList={this.state.toDoList}
  handleOnChange={this.toggleCompleted}
  deleteItem={this.deleteItem}
  editItem={this.editItem}
  />
      </div>
      
      </>
    )
  }
}
