import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    }
  }
  
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) => <li key={index}>{item.value}</li>)}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);