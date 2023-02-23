import { priorityTypes } from 'components/TodoApp/TodoApp';
import { Button, Card, Form } from 'react-bootstrap';

const backByPriority = (p) => {
  switch (p) {
    case priorityTypes[0]:
      return 'green';
    case priorityTypes[1]:
      return 'yellow';
    case priorityTypes[2]:
      return 'red';

    default:
      return 'black';
  }
};

const TodosList = ({ todos, handleIsDone, filter }) => {
  const filteredTodos = todos.filter((el) => {
    return el.title
      .toLowerCase()
      .includes(filter.toLowerCase());
  });

  return (
    <ol>
      {filteredTodos.map((todo) => {
        const {
          title,
          description,
          priority,
          category,
          isDone,
          id,
        } = todo;
        return (
          <Card
            style={{
              width: '18rem',
              backgroundColor: backByPriority(priority),
              opacity: isDone ? '0.4' : '1',
            }}
            key={id}>
            <Card.Body>
              <Card.Title>TITLE: {title}</Card.Title>
              <Card.Text>
                Description: {description}
              </Card.Text>
              <Card.Text>Category: {category}</Card.Text>
              <Form.Group
                className='mb-3'
                controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='Is Task done?'
                  checked={isDone}
                  onChange={() => {
                    handleIsDone(todo);
                  }}
                />
              </Form.Group>
              <Button variant='danger'>Delete</Button>
            </Card.Body>
          </Card>
        );
      })}
    </ol>
  );
};

export default TodosList;
