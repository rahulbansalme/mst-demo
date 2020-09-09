import React from 'react'
import { observer } from 'mobx-react'

import TodoList from '../components/TodoList'
import { useStore } from '../store/root.ts'

const VisibleTodoList = observer(() => {
  const store = useStore();
  return <TodoList todos={store.getVisibleTodos()} />
})

export default VisibleTodoList