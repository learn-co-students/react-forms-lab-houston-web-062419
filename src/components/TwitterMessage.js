import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      char: props.maxChars
    };
  }

  handleChange = (e) =>{
  
    this.setState({
    inputValue: e.target.value,
    char: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={(e) => this.handleChange(e)} />
        <h6>Characters Left: {this.state.char}</h6>

      </div>
    );
  }
}

export default TwitterMessage;
