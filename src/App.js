import React, { Component } from 'react';
//CSS
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  usersApi = "https://jsonplaceholder.typicode.com/users";

  // Lifecycle method 
  componentDidMount() {
    fetch(this.usersApi)
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users
        });
      });
  }




  render() {
    return (
      <div>
        Search Me
      </div>
    );
  }
}

export default App;
