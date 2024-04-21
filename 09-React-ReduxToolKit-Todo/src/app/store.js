import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/TodoSlice'

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})