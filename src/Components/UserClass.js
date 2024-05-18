import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>{this.props.name}</h1>
        <h2>Software Engineer</h2>
      </div>
    );
  }
}

export default UserClass;
