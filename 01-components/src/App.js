import './App.css';
import Title from 'components/Title/Title';
import Container from 'components/Container/Container';
import List from 'components/List/List';
import images from 'db/db.json';

function App() {
  return (
    <Container>
      <Title subject='Image Gallery' />
      <List items={images} />
      {/* <Title>We know HTML</Title> */}
    </Container>
  );
}

export default App;
