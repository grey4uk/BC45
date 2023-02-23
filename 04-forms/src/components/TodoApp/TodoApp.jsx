import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import TodosList from 'components/TodosList/TodosList';

export const priorityTypes = ['low', 'mid', 'high'];
const categories = ['car', 'home', 'study'];

const init = {
  title: '',
  description: '',
  priority: priorityTypes[0],
  category: '',
  isDone: false,
};

class TodoApp extends Component {
  state = {
    todos: [],
    todo: init,
    filter: '',
  };

  onChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({
      todo: {
        ...prev.todo,
        [name]:
          name === 'isDone' ? !prev.todo.isDone : value,
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state.todo, id: nanoid() };
    this.setState(
      (prev) => ({
        todos: [...prev.todos, newTodo],
        todo: init,
      }),
      () => {
        alert('Your todo added');
      }
    );
  };

  handleIsDone = (task) => {
    const indexOfTask = this.state.todos.findIndex(
      (el) => el.id === task.id
    );
    const newTodos = [...this.state.todos];
    newTodos.splice(indexOfTask, 1, {
      ...task,
      isDone: !task.isDone,
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todo, todos, filter } = this.state;
    const {
      title,
      description,
      priority,
      category,
      isDone,
    } = todo;
    const { onChange, onSubmit, handleIsDone } = this;

    return (
      <>
        <h2>Todos</h2>
        <form
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={onChange}
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={description}
            onChange={onChange}
          />
          <div>
            {priorityTypes.map((el) => (
              <label key={el}>
                {el}
                <input
                  type='radio'
                  name='priority'
                  checked={el === priority}
                  value={el}
                  onChange={onChange}
                />
              </label>
            ))}
          </div>
          <select
            name='category'
            defaultValue={category}
            onChange={onChange}>
            <option value=''>Choose category</option>
            {categories.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <label>
            Is it done alredy?
            <input
              type='checkbox'
              name='isDone'
              checked={isDone}
              onChange={onChange}
            />
          </label>
          <Button variant='primary' type='submit'>
            Add
          </Button>
        </form>
        <input
          placeholder='find todo by title'
          value={filter}
          onChange={(e) =>
            this.setState({ filter: e.target.value })
          }
        />
        <TodosList
          filter={filter}
          todos={todos}
          handleIsDone={handleIsDone}
        />
      </>
    );
  }
}

export default TodoApp;
