import React from "react";

class ToDoTask extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      done: this.props.task.done
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      done: !this.state.done
    });
  };

  render() {
    return (
      <li onClick={this.handleClick}>{this.props.task.name} - {this.state.done ? 'Done' : 'Todo'} </li>
    )
  }
}

export default ToDoTask;
