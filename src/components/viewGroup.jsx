import React, { Component } from "react";

class Viewgroup extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.match };
    console.log(props);
  }

  state = {};
  render() {
    return (
      <div>
        <h2>This is View Group Page</h2>
        {this.state.data.params.id}
      </div>
    );
  }
}

export default Viewgroup;
