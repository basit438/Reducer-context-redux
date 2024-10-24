import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: "toDo",
    initialState: [],
    reducers: {
        addItem(state, action) {
            
        },

        deleteItem(state, action) {

        },

        editItem(state, action) {

        }
    }

});

console.log(toDoSlice);

export const { addItem, deleteItem, editItem } = toDoSlice.actions;

export default toDoSlice.reducer;