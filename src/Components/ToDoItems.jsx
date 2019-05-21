import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
class ToDoItems extends Component {
  render() {
    const { ToDo, removeItem } = this.props
    return (
      <ul style={{ listStyleType: 'none' }}>
        {ToDo.map((item, index) => (
          <li key={index}> <ToDoItem item={item} index={index} removeItem={removeItem} /></li>
        )
        )}
      </ul>
    )
  }
}
export default ToDoItems;
