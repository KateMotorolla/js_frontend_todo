import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ToDoList from './ToDoList';
import ToDoTaskAdd from './ToDoTaskAdd';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
    this.onTaskAdd = this.onTaskAdd.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
  }
  componentDidMount() {
    fetch('tasks').then(function(res) {
      return res.json();
    }).then((data) => {
      this.setState({
        tasks: data
      });
    });
  }
  onTaskAdd (task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  onTaskDelete (_id) {
    this.setState({
      tasks: this.state.tasks.filter(function(task){
        return task._id !==_id;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ToDoList tasks={this.state.tasks} onTaskDelete={this.onTaskDelete}/>} />
            <Route path="/add" element={<ToDoTaskAdd onTaskAdd={this.onTaskAdd} />} />
          </Routes>
        </Router>
      </div>
    );
  } 
}

export default App;
