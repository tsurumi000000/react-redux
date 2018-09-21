import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">aaaa</label>
        <input type="text" onChange={() => { console.log("hi!!") }}></input>
      </React.Fragment>
    );
  }
}

export default App;
