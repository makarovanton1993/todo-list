import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface TaskListState {
    taskList: Array<T>
}

const initialState: TaskListState = {
    taskList: [{ name: 'Задача 1', desc: '123', status: false }, { name: 'Задача 2', desc: '123', status: false }, { name: 'Задача 3', desc: '123', status: true }],
}

export const TaskListSlice = createSlice({
    name: 'TaskList',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<object>) => {
            state.taskList = [...state.taskList, action.payload]
        },
        delTask: (state, action: PayloadAction<number>) => {
            state.taskList = state.taskList.filter((item, i) => i != action.payload)
        },
        editStatusTask: (state, action: PayloadAction<object>) => {

            const { ind, status }: any = action.payload
            state.taskList.filter((item, i) => {
                if (i == ind) {
                    item.status = !status
                }
            })
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, delTask, editStatusTask } = TaskListSlice.actions
export const tasks = (state: RootState) => state.taskList
export default TaskListSlice.reducer