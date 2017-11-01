import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault()

  }

  onUserInputChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onPasswordInputChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.onUserInputChange} />
          </label>

        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.onPasswordInputChange} />
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
