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
      const { tripId, tasks } = action.payload;
      const trip = state.booking.find((item) => item.id === tripId);
      if (trip) {
        trip.tasks.push(tasks);
      }
    },

    deleteTask: (state, action) => {
      const { tripId, Id } = action.payload;
      return {
        ...state,
        booking: state.booking.map((trip) => {
          if (trip.id === tripId) {
            return {
              ...trip,
              tasks: trip.tasks.filter((task) => task.id !== Id),
            };
          }
          return trip;
        }),
      };
    },
    completeTask: (state, action) => {
      const { tripId, taskId } = action.payload;
      return {
        ...state,
        booking: state.booking.map((trip) => {
          if (trip.id === tripId) {
            return {
              ...trip,
              tasks: trip.tasks.map((task) => {
                if (task.id === taskId) {
                  return {
                    ...task,
                    completed: !task.completed,
                  };
                }
                return task;
              }),
            };
          }
          return trip;
        }),
      };
    },
  },
});

export const { addTrip, deleteTrip, addTask, deleteTask, completeTask } =
  SavedSlice.actions;

export default SavedSlice.reducer;
