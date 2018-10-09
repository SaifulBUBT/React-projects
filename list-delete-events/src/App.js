import React, { Component } from 'react';

import './App.css';
import User from './components/User'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [
        {id:'120', name: 'Saiful', age: 25},
        {id: '121', name: 'Perker', age: 27},
        {id: '122', name: 'jose', age: 30}
      ]
    }

  }

  deleteElement = (index) =>{
      const users = Object.assign([], this.state.users);
      users.splice(index, 1)
      this.setState({
        users: users
      })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index)=>{
              return(
                <User key= {user.id} age={user.age} delEvent={this.deleteElement.bind(this, index)}>
                  {user.name}
                </User>
              )
            } )
          }
        </ul>
      </div>
    );
  }
}

export default App;
