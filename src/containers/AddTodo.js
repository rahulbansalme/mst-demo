import React from 'react';
import { observer } from "mobx-react";
import { useStore } from '../store/root.ts'

const AddTodo = observer(() => {
  let input
  const { addTodo } = useStore();
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
})

export default AddTodo;