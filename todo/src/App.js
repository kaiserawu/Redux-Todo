import React, { Component } from 'react';
import { connect } from 'react-redux';
// import relevent actions here
import { addTodo } from './actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newTodo: ''
    }
  }

  handleText = e => {
    this.setState({newTodo: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: ''});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.state.todos.map((item, index) => <li key={index}>{item.value}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Add a new Todo!' value={this.state.newTodo} onChange={this.handleText}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //add state info here
    state: state
  };
};

export default connect(mapStateToProps, {addTodo})(App);
