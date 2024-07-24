import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setPriority: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.priority = action.payload.priority;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask, setPriority } = taskSlice.actions;
export default taskSlice.reducer;
