import React from 'react'

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { index } = this.props
    this.props.deleteItem(index)
  }

  render() {
    const {content} = this.props
    return (
      <li 
        onClick = {this.handleClick}
      >{content}</li>
    )
  }
}

export default TodoItem