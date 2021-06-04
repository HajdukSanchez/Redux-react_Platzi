import React, { Component } from "react";

export default class Posts extends Component {
  render() {
    return (
      <div>
        {/* This is the way to get the Params that we past by URL */}
        {this.props.match.params.id}
      </div>
    );
  }
}
