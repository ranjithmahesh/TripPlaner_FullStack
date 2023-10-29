import { createSlice } from "@reduxjs/toolkit";
import { saveBookings } from "../services/asyncStorageService";

export const SavedSlice = createSlice({
  name: "booking",
  initialState: {
    booking: [],
  },
  reducers: {
    addTrip: (state, action) => {
      state.booking.push({ ...action.payload, tasks: [] });
      saveBookings(state.booking);
    },

    deleteTrip: (state, action) => {
      const bookingId = action.payload;
      state.booking = state.booking.filter((item) => item.id !== bookingId);
      saveBookings(state.booking);
    },
    addTask: (state, action) => {
      const { tripId, tasks } = action.payload;
      const trip = state.booking.find((item) => item.id === tripId);
      if (trip) {
        trip.tasks.push(tasks);
        saveBookings(state.booking);
      }
    },

    // removeFromCart: (state, action) => {
    //   const removeItem = state.cart.filter((item) => {
    //     item.id !== action.payload.id;
    //   });
    //   state.cart = removeItem;
    // },
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
          return trip, saveBookings(state.booking);
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
                return task, saveBookings(state.booking);
              }),
            };
          }
          return trip, saveBookings(state.booking);
        }),
      };
    },
  },
});

export const { addTrip, deleteTrip, addTask, deleteTask, completeTask } =
  SavedSlice.actions;

export default SavedSlice.reducer;
