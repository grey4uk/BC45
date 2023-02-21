import { FaBeer } from 'react-icons/fa';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';
import Title from 'components/Title/Title';
import Image from 'components/ImageComponent';
import { ReactComponent as Delete } from 'assets/delete.svg';
import Modal from 'components/Modal/Modal';

const App = () => {
  return (
    <Container>
      <Title text='Application with CSS' variant='h1' />
      <TrafficLights colorOfBackground='green' />
      <div>
        <Title text='Button Box' variant='h3' />
        <Button title='Left'>
          <FaBeer style={{ width: '24px' }} />
        </Button>
        <Button
          title='Right'
          addedStyle={{
            background: 'grey',
            borderRadius: '8px',
          }}>
          <Delete
            style={{ width: '24px', fill: 'tomato' }}
          />
        </Button>
      </div>
      <Image />
      <Modal />
    </Container>
  );
};

export default App;
