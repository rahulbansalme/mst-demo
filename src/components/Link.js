import React from 'react'
import PropTypes from 'prop-types'

import { useStore } from '../store/root.ts'

const Link = ({ active, filter, children }) => {
  const store = useStore();
  return (
    <button
      onClick={() => {
        store.setVistibilityFilter(filter)
      }}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link