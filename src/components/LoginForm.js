import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"11",
      password:"11"
    };
  }

handleUserInputChange = event => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value,
    });
  }

handlePassInputChange = event => {
      console.log(event.target.value)

    this.setState({
      password: event.target.value,
    });
  }

preHandle = (e) =>{
  e.preventDefault()
  console.log(this.state)
  if ((this.state.username != "") && (this.state.password != ""))
    this.props.handleLogin(this.state.username, this.state.password)
}

  render() {
    return (
      <form onSubmit={e => this.preHandle(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={this.handleUserInputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            onChange={this.handlePassInputChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
