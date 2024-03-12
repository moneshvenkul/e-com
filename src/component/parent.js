import React from "react";

class ParentComponent extends React.Component {
    handleClick = (event) => {
        
      console.log("Click event handled by ParentComponent");
    };
  
    render() {
      return (
        <div onClick={this.handleClick}>
          <ChildComponent />
        </div>
      );
    }
  }
  
  class ChildComponent extends React.Component {
    handleClick = (event) => {
        event.stopPropagation();
      console.log("Click event handled by ChildComponent");
    };
  
    render() {
      return <button onClick={this.handleClick}>Child Click Me</button>;
    }
  }
export default ParentComponent;