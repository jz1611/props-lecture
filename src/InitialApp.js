import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: ["josh", "riley", "adam"],
      name: ""
    }
    this.addFriend = this.addFriend.bind(this);
  }

addFriend(){
  this.setState({
    name: "",
    list: [...this.state.list, this.state.name]
  });
}

  render(){
    const {list, name} = this.state;
    const myMappedList = list.map((name, index) => {
    return <div key={index}>{name}</div>;
    });

    return (
      <div className="App">
        <input
          value={ name }
          onChange={ (event) => this.setState({name: event.target.value}) }
        />
        <div>{myMappedList}</div>
        <button onClick={ this.addFriend }>Add Friend</button>
      </div>
    );
  }
}

export default App;