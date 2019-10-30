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

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <section>
        <UserCard 
          name={this.state.user.login} 
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
