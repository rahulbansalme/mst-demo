
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => todo.toggle(todo.id)} />
    ))}
  </ul>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default TodoList
