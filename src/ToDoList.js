import React from "react";

import ToDoTask from './ToDoTask';

class ToDoList extends React.Component {
   
  render() {
    return (
      <div className="List">
        <ul> 
        {
          this.props.tasks.map((task)=> {
            return (
              <ToDoTask task = {task} onTaskDelete ={this.props.onTaskDelete} key = {task._id}/>
            )
          })
        }
        </ul> 
      </div>
    );
  } 
}

export default ToDoList;