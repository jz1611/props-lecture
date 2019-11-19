import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import Input from './components/Input';
import Button from './components/Button';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: ["josh", "riley", "adam"],
      name: ""
    }
    this.addFriend = this.addFriend.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  addFriend(){
    this.setState({
      name: "",
      list: [...this.state.list, this.state.name]
    });
  }

  changeHandler(event) {
    this.setState({
      name: event.target.value
    })
  }

  render(){
    const {list, name} = this.state;

    return (
      <div className="App">
        <Input
          changeHandler={ this.changeHandler }
          name={name}
        />
        <Button
          action={this.addFriend}
          label="Add Friend"
        />
        <FriendList list={list}/>
      </div>
    );
  }
}

export default App;