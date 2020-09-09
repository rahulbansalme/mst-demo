import React from 'react'
import { observer } from "mobx-react";

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = observer(() => (
  <>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
));

export default App