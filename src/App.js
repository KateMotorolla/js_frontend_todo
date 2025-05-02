import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ToDoList from './ToDoList';
import ToDoTaskAdd from './ToDoTaskAdd';
import { todoAddAll } from './actions';

class App extends React.Component {
 
  componentDidMount() {
    fetch('tasks').then(function(res) {
      return res.json();
    }).then((data) => {
      this.props.dispatch(todoAddAll(data));
    });
  }

  render() {
    return (
      <div className="row d-flex justify-content-center container">
        <div className="col-md-8">
          <Provider store = {this.props.store}>
            <Router>
              <Routes>
                <Route path="/" element={<ToDoList />} />
                <Route path="/add" element={<ToDoTaskAdd />} />
              </Routes>
            </Router>
          </Provider>
        </div>  
      </div>
    );
  } 
}
export default connect()(App);
