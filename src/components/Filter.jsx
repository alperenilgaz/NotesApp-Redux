import React, { useContext } from 'react'

import MainContext from './MainContext'

function Filter() {
    
    const {setfilter,filter} = useContext(MainContext)
    
  return (
    <div className="filter">
        <input value={filter} onChange={(e) => setfilter(e.target.value)} type="text" placeholder='Search...' />
    </div>
  )
}

export default Filter