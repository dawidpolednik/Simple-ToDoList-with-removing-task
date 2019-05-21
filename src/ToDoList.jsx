import React, { Component } from 'react';
import ToDoItems from './ToDoItems.jsx'
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ToDo: [],
            value: ''
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.value.length > 0) {
            this.setState(prevState => ({
                value: '',
                ToDo: [...this.state.ToDo, prevState.value],
            }))
        }
        else return alert("Please write some task")
    }
    removeItem = (index) => {
        const ToDo = [...this.state.ToDo];
        ToDo.splice(index, 1);
        this.setState({
            ToDo
        })
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmitForm}>
                    <input value={this.state.value} onChange={this.handleChangeInput} placeholder='Write a task'></input>
                    <button type='submit'>Add a task</button>
                </form>
                <ToDoItems ToDo={this.state.ToDo} removeItem={this.removeItem} />
            </>
        );
    }
}
export default ToDoList;