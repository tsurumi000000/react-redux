import React, { Component } from 'react'


// クラス Component
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">aaaa</label>
//         <input type="text" onChange={() => { console.log("hi!!") }}></input>
//       </React.Fragment>
//     );
//   }
// }


// 関数component
const App = () => (<Counter></Counter>)

class Counter extends Component {

  // constructor = stateの初期値
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinasButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log("render")
    return (
      <React.Fragment>
        <div>count: {this.state.count} </div >
        <button onClick={this.handlePlusButton} >+1</button>
        <button onClick={this.handleMinasButton} >-1</button>
      </React.Fragment>
    )
  }
}



export default App;
