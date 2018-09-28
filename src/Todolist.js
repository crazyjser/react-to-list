import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      willTodoThing: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAddClick() {
    if (this.state.willTodoThing === '') {
      return false
    }
    this.setState({
      list: [...this.state.list, this.state.willTodoThing],
      willTodoThing: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      willTodoThing: e.target.value
    })
  }

  handleDelete(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.willTodoThing}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddClick}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem 
                  deleteItem = {this.handleDelete}
                  key = {index}
                  content = {item}
                  index = {index}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
