import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { tripId, task } = action.payload;
      const trip = state.tasks.find((t) => t.id === tripId);
      if (trip) {
        trip.tasks.push({ ...task });
      }
    },
    markTaskCompleted: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = true;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, markTaskCompleted, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
