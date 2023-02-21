import Title from 'components/Title/Title';

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

const TrafficLights = ({ colorOfBackground }) => {
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
          isActive: false,
        })}></div>
      <div
        style={getBackColor({
          color: 'yellow',
          isActive: true,
        })}></div>
      <div
        style={getBackColor({
          color: colorOfBackground,
          isActive: false,
        })}></div>
    </div>
  );
};

export default TrafficLights;
