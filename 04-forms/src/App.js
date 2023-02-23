import TodoApp from 'components/TodoApp/TodoApp';
import { Component } from 'react';
import AuthForm from './components/AuthForm/AuthForm';

class App extends Component {
  state = { user: null };

  authUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        {user ? (
          <TodoApp />
        ) : (
          <AuthForm authUser={this.authUser} />
        )}
      </>
    );
  }
}

export default App;
