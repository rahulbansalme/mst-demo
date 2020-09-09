import React from 'react'
import { observer } from 'mobx-react'

import Link from '../components/Link'
import { useStore } from '../store/root.ts'

const FilterLink = observer(({ filter, children }) => {
    const store = useStore();
    return <Link active={store.isActiveFilter(filter)} filter={filter}>
      {children}
    </Link>
})

export default FilterLink;