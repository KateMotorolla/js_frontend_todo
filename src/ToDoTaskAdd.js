import React from "react";
import { useNavigate,  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { todoAdd } from './actions';

class ToDoTaskAddInner extends React.Component {
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
      this.props.dispatch(todoAdd(data._id, data.name, data.description));
      this.props.history('/');
    });
  }

  render() {
    return (
      <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="fa fa-tasks"></i>&nbsp;Add Task
          </div>  
        </div>
          <form onSubmit={this.onAddFormSubmit} >
            <div className='widget-content'>
              <div className='widget-content-wrapper'>
                <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='name' className='form-control'/>
                <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder='Description' className='form-control'/>
                <input type="submit" value="Add" className='btn btn-primary'/>
              </div>
            </div>            
          </form>
          <div className="d-block text-right card-footer">
            <NavLink to='/' className="btn btn-primary">Back to list</NavLink>
          </div>
      </div>
    )
  }
}
const ToDoTaskAdd = (props) => {
  return (
    <ToDoTaskAddInner {...props} history = {useNavigate()} />
  )
}

export default connect () (ToDoTaskAdd);
