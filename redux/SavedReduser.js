import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "booking",
  initialState: {
    booking: [],
  },
  reducers: {
    addTrip: (state, action) => {
      state.booking.push({ ...action.payload, tasks: [] });
    },

    deleteTrip: (state, action) => {
      const bookingId = action.payload;
      state.booking = state.booking.filter((item) => item.id !== bookingId);
    },
    addTask: (state, action) => {
      const { tripId, task } = action.payload;
      const trip = state.booking.find((item) => item.id === tripId);
      if (trip) {
        trip.tasks.push(task);
      }
    },
    deleteTask: (state, action) => {
      const { tripId, taskId } = action.payload;
      const trip = state.booking.find((item) => item.id === tripId);
      if (trip) {
        trip.tasks = trip.tasks.filter((task) => task.id !== taskId);
      }
    },
    completeTask: (state, action) => {
      const { tripId, taskId } = action.payload;
      const trip = state.booking.find((item) => item.id === tripId);
      if (trip) {
        const task = trip.tasks.find((task) => task.id === taskId);
        if (task) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTrip, deleteTrip, addTask, deleteTask, completeTask } =
  SavedSlice.actions;

export default SavedSlice.reducer;
