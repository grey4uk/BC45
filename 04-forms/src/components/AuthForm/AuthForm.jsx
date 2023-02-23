import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const init = { email: '', password: '' };

class AuthForm extends Component {
  state = init;
  // uncontrolled
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formElements = form.elements;
  //   const email = formElements.email.value;
  //   const pass = formElements.password.value;
  //   // const email = formElements[0].value;
  //   // const pass = formElements[1].value;
  //   console.log('{email,pass}', { email, pass });
  //   // setTimeout(() => {
  //   //   form.reset();
  //   // }, 1000);
  //   this.props.authUser({ email, password: pass })
  //   form.reset();
  // };

  // controlled
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authUser(this.state);
    this.reset();
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState(init);
  };

  render() {
    const { handleChange, state } = this;
    const { email, password } = state;
    return (
      // vanilla version
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <button>Auth</button>
      </form>
      // bootstrap version
      // <Form onSubmit={this.handleSubmit}>
      //   <Form.Group
      //     className='mb-3'
      //     controlId='formBasicEmail'>
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control
      //       type='email'
      //       placeholder='Enter email'
      // value={email}
      // onChange={handleChange}
      //     />
      //   </Form.Group>

      //   <Form.Group
      //     className='mb-3'
      //     controlId='formBasicPassword'>
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control
      //       type='password'
      //       placeholder='Password'
      // value={password}
      // onChange={handleChange}
      //     />
      //   </Form.Group>
      //   <Button variant='primary' type='submit'>
      //     Submit
      //   </Button>
      // </Form>
    );
  }
}

export default AuthForm;
