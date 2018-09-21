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
  const profiles = [
    { name: "taro", age: 20 },
    { name: "aaaaa", age: 20 },
    { name: "bbbbb" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

// propsはcomponentの属性を決める
const User = (props) => {
  return <div>I am {props.name}, and {props.age} years </div>
}

User.defaultProps = {
  age: 1
}

export default App;
