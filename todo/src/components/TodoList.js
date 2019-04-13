import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    }
  }

  handleToggle = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  }
  
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) =>
          <li key={index} onClick={e => this.handleToggle(e, index)} >
            {item.value} {item.completed && <span>-</span>}
          </li>)}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { toggleTodo })(TodoList);