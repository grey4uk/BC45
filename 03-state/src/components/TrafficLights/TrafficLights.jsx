import Button from 'components/Button/Button';
import Title from 'components/Title/Title';
import { Component } from 'react';

const round = {
  display: 'block',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: 'red',
  border: '1px solid black',
};

const getBackColor = ({ color, isActive }) => ({
  ...round,
  background: isActive ? color : 'white',
});

const colors = ['red', 'yellow', 'green'];

class TrafficLights extends Component {
  state = { indexOfActiveColor: 0 };

  turnOn = () => {
    const id = setInterval(() => {
      this.setState((prev) => ({
        indexOfActiveColor:
          prev.indexOfActiveColor < 2
            ? prev.indexOfActiveColor + 1
            : 0,
      }));
    }, 1000);
  };

  render() {
    const { colorOfBackground } = this.props;
    const { indexOfActiveColor } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
        }}>
        <Title variant='h2' text='Traffic lights' />
        <div
          style={getBackColor({
            color: ' red',
            isActive: colors[indexOfActiveColor] === 'red',
          })}></div>
        <div
          style={getBackColor({
            color: 'yellow',
            isActive:
              colors[indexOfActiveColor] === 'yellow',
          })}></div>
        <div
          style={getBackColor({
            color: colorOfBackground,
            isActive:
              colors[indexOfActiveColor] === 'green',
          })}></div>
        <Button title='Turn on' handleClick={this.turnOn} />
      </div>
    );
  }
}

export default TrafficLights;
