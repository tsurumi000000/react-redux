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
const App = () => {
  return (
    <div>
      Hi!!
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>aaaaaa</div>
}

export default App;
