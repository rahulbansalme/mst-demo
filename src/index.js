import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import store, { RootStoreProvider } from './store/root.ts';

render(
  <RootStoreProvider value={store}>
    <App />
  </RootStoreProvider>,
  document.getElementById('root')
)