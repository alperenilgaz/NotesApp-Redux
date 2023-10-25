import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes } from '../redux/Notes/NotesSlice'
import { nanoid } from '@reduxjs/toolkit'

function Content() {
  const [title, settitle] = useState("")
  const dispatch = useDispatch()
  const [color, setcolor] = useState("")
  const HandleClick = () => {
   if(title.trim() !== '' && color !== ''){
    dispatch(addNotes({id:nanoid(),title,color}))
    setcolor('')
    settitle('')
   }
   
  }
  return (
    <div className="content">
      <textarea value={title} onChange={(e) => settitle(e.target.value)}  placeholder='Enter your Note Here...' cols="70" rows="10"></textarea>
      <div className="action">
        <div className="box">
          <button  onClick={(e) => setcolor('ff0000')} className='box1 active'></button>
          <button onClick={(e) => setcolor('0000FF')} className='box2'></button>
          <button onClick={(e) => setcolor('008000')} className='box3'></button>
          <button onClick={(e) => setcolor('00ffff')} className='box4'></button>
          
        </div>
        <div className="send">
        <button  onClick={() => HandleClick(color)}>ADD</button>
      </div>
      </div>
      
    </div>
  )
}

export default Content