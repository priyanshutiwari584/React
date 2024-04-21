import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Hello', completed: false }]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        markComplete: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            state.todos[index].completed = !state.todos[index].completed;
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const index = state.todos.findIndex((todo) => todo.id === id);
            state.todos[index].text = text
        },
    }
})

export const { addTodo, deleteTodo, markComplete, editTodo } = todoSlice.actions

export default todoSlice.reducer