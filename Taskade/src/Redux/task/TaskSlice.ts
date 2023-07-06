import {createSlice} from '@reduxjs/toolkit'
type TestState = any[];
const initialState :TestState =[
    {
        id:'321',
        taskDetail:  {
            name: "New Task",
            desc: "New Task Description"
        }
    }
]
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // Write a reducer function addTask which will add the payload to existing state,
    },
}
)
// Uncomment below line after creating above addTask function
// export const {addTask} = taskSlice.actions 
export default taskSlice.reducer