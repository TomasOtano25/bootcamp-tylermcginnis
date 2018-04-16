import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const FriendsList = props => {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}>
          <span>{name}</span>
          <button onClick={() => props.onRemoveFriend(name)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["Anibal", "Tomas", "Sebastian"],
      friend: ""
    };

    this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleAddFriend(event) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.concat([this.state.friend]),
        friend: ""
      };
    });
  }

  updateInput(e) {
    const value = e.target.value;
    this.setState({
      friend: e.target.value
    });
  }

  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      };
    });
  }

  render() {
    return (
      <div>
        <input
          type={this.state.friend}
          onChange={this.updateInput}
          value={this.state.friend}
          placaholder="New friend"
        />
        <input type="submit" value="Add" onClick={this.handleAddFriend} />
        <FriendsList
          list={this.state.friends}
          onRemoveFriend={this.handleRemoveFriend}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
