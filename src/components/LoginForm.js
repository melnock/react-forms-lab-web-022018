import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value_user: "",
      value_pass: "",

    };
  }

  handleChangeUser = event => {
    this.setState({
      value_user: event.target.value,
    })
  }
  handleChangePass = event => {
      this.setState({
        value_pass: event.target.value,
      })
    }

  handleSubmit = event =>{
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleChangeUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handleChangePass}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
