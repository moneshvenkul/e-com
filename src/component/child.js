import React from "react";

class ChildComponent extends React.Component {
  handleClick = () => {
    console.log("Click event handled by ChildComponent");
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ChildComponent;