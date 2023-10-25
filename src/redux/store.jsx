import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./Notes/NotesSlice";

export const store = configureStore({
    reducer:{
        notes:NotesSlice
    }
})