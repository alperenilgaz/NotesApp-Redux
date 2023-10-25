import { createSlice } from "@reduxjs/toolkit";

export const NotesSlice = createSlice({
    name:'notes',
    initialState:{
        items:[
            {
                id:1,
                title:'learn React',
                color:'ff0000'
                
            },
            {
                id:2,
                title:'learn redux',
                color:'00ffff'
                
            }
        ],
     
    },
    reducers:{
        addNotes:((state,action) => {
            state.items.push(action.payload)
        }),
      
    }
})

export default NotesSlice.reducer

export const {addNotes,changeColor} = NotesSlice.actions