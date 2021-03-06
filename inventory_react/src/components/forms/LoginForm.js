import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <Form onSubmit={e => this.props.handle_login(e, this.state)} className="bg-light p-5 rounded shadow">
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          className='form-control'
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          className='form-control'
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" className='btn btn-secondary mt-5'/>
      </Form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};