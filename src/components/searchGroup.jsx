import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Searchgroup extends Component {
  // constructor() {
  //   super();
  //   this.state = { data: [] };
  // }

  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results[0],
      loading: false
    });
    console.log(data.results[0]);
  }

  render() {
    return (
      <div>
        <h2>This is Search Page</h2>
        <br />
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.person.name.first + " : "}
            <Link to={`/viewgroup/${this.state.person.name.first}`}>
              {this.state.person.name.last}
            </Link>
            <br />
            <img src={this.state.person.picture.large} />
          </div>
        )}
      </div>
    );
  }
}
