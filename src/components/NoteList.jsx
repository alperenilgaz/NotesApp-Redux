import React, { useContext } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {getContrastYIQ} from './Helper'
import MainContext from './MainContext'

let filtered = []
function NoteList() {
  const {filter} = useContext(MainContext)
  const item = useSelector(state => state.notes.items)
   

  filtered=item
  // if(filter !== '') {
  //  
  // }

  filtered = item.filter(item => item.title.toLowerCase().includes(filter))

return (
  <div className="notelist">
      <ul>
        
          {filtered.map(notes => (
          <li key={notes.id} style={{'--bgColor':`#${notes.color}`,'--textColor':`${getContrastYIQ(notes.color)}`}}>{notes.title}</li>  


        ))} 
         

      </ul>


    </div>
  )
}

export default NoteList