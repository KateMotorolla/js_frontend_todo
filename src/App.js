import React from "react";

import ToDoTask from './ToDoTask';

class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    fetch('tasks').then(function(res) {
      return res.json();
    }).then(function(data){
      console.log(data);
    });
  }

  render() {
    const data = [
      {"_id":"67f18a4b34b7b3249057447a", "name":"task1", "description1":"", "done":false},
      {"_id":"67f18dea475b3485e702d02e", "name":"task2", "description2":"", "done":true},
      {"_id":"67f18f825e036351bd1697da", "name":"task3", "description3":"", "done":false},
      {"_id":"67f393064439805599e83b0a", "name":"task4", "description4":"", "done":false}
    ];
    function mapTodoList(task) {
      return (
        <ToDoTask task = {task} key = {task._id}/>
      )
    }
    return (
      <div className="App">
        <ul> 
        {
          data.map(mapTodoList)
        }
        </ul> 
      </div>
    );
  } 
}

export default App;
