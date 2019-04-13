import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends React.Component {
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
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Add a new Todo!' value={this.state.newTodo} onChange={this.handleText}/>
        <input type='submit'/>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(AddTodo);