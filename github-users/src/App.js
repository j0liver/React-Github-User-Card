import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import UserCard from '../src/components/UserCard'

class App extends React.Component {
  state={
    user: {},
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/j0liver')
      .then(res => {
        // console.log(res)
        this.setState({
          user: res.data
        })
        axios
          .get('https://api.github.com/users/j0liver/followers')
          .then(res => {
            // console.log(res)
            this.setState({
              followers: res.data
            })
          })
      })
      .catch(err => console.log(err));
      
  }

  


//   (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {login: "TinySquid", id: 13441400, node_id: "MDQ6VXNlcjEzNDQxNDAw", avatar_url: "https://avatars1.githubusercontent.com/u/13441400?v=4", gravatar_id: "", …}
// 1: {login: "falmatad", id: 42183720, node_id: "MDQ6VXNlcjQyMTgzNzIw", avatar_url: "https://avatars2.githubusercontent.com/u/42183720?v=4", gravatar_id: "", …}
// 2: {login: "YeetOrBeYate", id: 40674349, node_id: "MDQ6VXNlcjQwNjc0MzQ5", avatar_url: "https://avatars1.githubusercontent.com/u/40674349?v=4", gravatar_id: "", …}
// 3: {login: "sjeremich23", id: 51142646, node_id: "MDQ6VXNlcjUxMTQyNjQ2", avatar_url: "https://avatars3.githubusercontent.com/u/51142646?v=4", gravatar_id: "", …}
// 4: {login: "Greyflanel", id: 47545416, node_id: "MDQ6VXNlcjQ3NTQ1NDE2", avatar_url: "https://avatars2.githubusercontent.com/u/47545416?v=4", gravatar_id: "", …}

  

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <section>
        <UserCard name={this.state.user.login} 
                  avatar={this.state.user.avatar_url}

        />
        </section>
        <section>
          <h4>Followers</h4>
          {this.state.followers.map(follower => (
            <div>
            <img src={follower.avatar_url} />
            <p>{follower.login}</p>
            </div>
          ))
          }
        </section>
      </div>
    );
  }
}

export default App
