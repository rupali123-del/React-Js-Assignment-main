import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./task/TaskSlice";

export default configureStore({
    reducer: TaskSlice
});