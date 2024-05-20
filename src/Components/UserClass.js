import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  /*  -- React Class Lifecycle Method 
            Construstor
            Render
            componentdidmount
            componentDidupdate
            componentWillUnmount
        
      -- React functional Lifecycle Method/API
            UseEffect
             - takes a callback method and a dependency array(optional) 
             - with just the callback function useeffect is called in every render (MOUNT)
             - with an empty dependency array useEffect is called in the initial render (MOUNT)
             - with a dependency useeffect is called only when the dependency array elements updates (UPDATE)   
             - we can return from useEffect and clean up the code (UNMOUNT)  
*/

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
      </div>
    );
  }
}

export default UserClass;
