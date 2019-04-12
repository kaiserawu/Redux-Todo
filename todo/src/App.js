import React, { Component } from 'react';
import { connect } from 'react-redux';
// import relevent actions here
import {} from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //add state info here
  };
};

export default connect(mapStateToProps, {/*connect relevant imported actions here*/})(App);
