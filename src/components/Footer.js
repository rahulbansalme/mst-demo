import React from 'react'

import FilterLink from '../containers/FilterLink'
import { VisibilityFilters, useStore } from '../store/root.ts'
import { observer } from 'mobx-react';

const Footer = observer(() => {
  const store = useStore();
  return (
    <>
      <div>
          <span>Show: </span>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </div>

      <div>
          <br />
          <button onClick={store.fetchAsyncCount}>Fetch count async</button> : {store.isFetchingCount ? <span>Fetching...</span> : <span>{store.asyncCount}</span>}
      </div>
    </>
  )
})

export default Footer