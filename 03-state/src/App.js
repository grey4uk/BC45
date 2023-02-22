import React from 'react';
import { FaBeer } from 'react-icons/fa';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';
import Title from 'components/Title/Title';
import Image from 'components/ImageComponent';
import { ReactComponent as Delete } from 'assets/delete.svg';
import Modal from 'components/Modal/Modal';

// const App = () => {
//   return (
//     <Container>
//       <Title text='Application with CSS' variant='h1' />
//       <TrafficLights colorOfBackground='green' />
//       <div>
//         <Title text='Button Box' variant='h3' />
//         <Button title='Left'>
//           <FaBeer style={{ width: '24px' }} />
//         </Button>
//         <Button
//           title='Right'
//           addedStyle={{
//             background: 'grey',
//             borderRadius: '8px',
//           }}>
//           <Delete
//             style={{ width: '24px', fill: 'tomato' }}
//           />
//         </Button>
//       </div>
//       {/* <Image />
//       <Modal /> */}
//     </Container>
//   );
// };

// export default App;

class App extends React.Component {
  state = {
    text: 'Hello React',
    counter1: 0,
    counter2: 0,
    activeComponent: '',
  };

  // constructor(props){
  //   super(props);
  //   this.handleClick=this.handleClick.bind(this);
  //   this.state={text:'Hello React', counter:0}
  // }

  //not need previous value from state
  // handleClick(e){this.setState({counter:1})}

  // for case when you count on previous value of state
  handleClick = (e) => {
    // console.log('e.target', e.target);
    const { name } = e.target;
    this.setState({
      [name]: this.state[name] + 1,
    });
    // for (let i = 0; i < 3; i++) {
    //   this.setState((prevState) => {
    //     console.log(
    //       'this.state.counter',
    //       prevState.counter
    //     );
    //     return { counter: prevState.counter + 1 };
    //   });
    // console.log('this.state.counter', this.state.counter);
    // }
    // this.setState({ counter: e });
  };

  render() {
    if (!this.state.activeComponent) {
      return (
        <>
          <Title variant='h1' text='Choose application' />
          <Button
            title='Counter'
            handleClick={() => {
              this.setState({ activeComponent: 'counter' });
            }}
            // prev={this.state.counter}
          />
          <Button
            title='TrafficLights'
            handleClick={() => {
              this.setState({ activeComponent: 'lights' });
            }}
            // prev={this.state.counter}
          />
        </>
      );
    }

    if (this.state.activeComponent === 'counter') {
      return (
        <>
          <h1>{this.state.text}</h1>
          <Title variant='h1' text='Node' />
          <Title variant='h2' text='React' />
          <p
            style={{
              textAlign: 'center',
              fontSize: '36px',
            }}>
            {this.state.counter1}
          </p>
          <Button
            title='Click1'
            name='counter1'
            handleClick={this.handleClick}
            // prev={this.state.counter}
          />
          <p
            style={{
              textAlign: 'center',
              fontSize: '36px',
            }}>
            {this.state.counter2}
          </p>
          <Button
            title='Click2'
            name='counter2'
            handleClick={this.handleClick}
            // prev={this.state.counter}
          />
        </>
      );
    }
    if (this.state.activeComponent === 'lights') {
      return <TrafficLights colorOfBackground='green' />;
    }
  }
}

export default App;
