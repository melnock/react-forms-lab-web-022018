import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      maxChars: 140,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: this.state.maxChars-1,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
