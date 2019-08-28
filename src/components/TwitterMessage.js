import React from "react";

class TwitterMessage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        value: ''
    };
    console.log(props.maxChars)
  }

handleChange = event => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange}  value={this.state.value} type="text" name="message" id="message"  />
        <p> {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
