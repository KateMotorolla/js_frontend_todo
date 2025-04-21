import React from "react";

class ToDoTaskAdd extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      description: ''
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
  }

  onNameChange(e) {
    e.preventDefault();

    this.setState({
      name: e.target.value
    });
  };

  onDescriptionChange(e) {
    e.preventDefault();

    this.setState({
      description: e.target.value
    });
  };

  onAddFormSubmit(e){
    e.preventDefault();

    fetch('tasks', {
      method: 'POST',
      body:  JSON.stringify({
        name: this.state.name,
        description: this.state.description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      this.props.onTaskAdd (data);
    });
  }

  render() {
    return (
     <form onSubmit={this.onAddFormSubmit} >
        <input type="text" value = {this.state.name} onChange = {this.onNameChange} placeholder = "Name"/> 
        <input type="text" value = {this.state.description} onChange = {this.onDescriptionChange} placeholder = "Description"/>
        <input type="submit" value = "Add" />
     </form>
    )
  }
}

export default ToDoTaskAdd;
