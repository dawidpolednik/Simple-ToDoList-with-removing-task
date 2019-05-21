import React, { Component } from 'react';
import './ToDoItem.css'

class ToDoItem extends Component {

    render() {

        const { item, removeItem, index } = this.props
        return (
            <div className="item">
                <p>{item}</p>
                <button onClick={(event) => removeItem(index)}>X</button>

            </div>
        )
    }
}
export default ToDoItem;
