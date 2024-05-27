import React from "react";
import UserContext from "../Utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <h2>Software Engineer</h2>
        User:
        <UserContext.Consumer>
          {({ LoggedInUser }) => <h2>{LoggedInUser}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
