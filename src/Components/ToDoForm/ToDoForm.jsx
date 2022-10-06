import React, { Component } from 'react'
import './ToDOForm.css'
export default class ToDoForm extends Component {
  
  render() {
    return (
      <>
      <form className='pt-3' onSubmit={this.props.handleSubmit}>
        <input type="text"
         placeholder='Add a Task...'
         value={this.props.newTodo}
         onChange={this.props.handleChange}
          className='w-100'/>
      </form>
      </>
    )
  }
}
