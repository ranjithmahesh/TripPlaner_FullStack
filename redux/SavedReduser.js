import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "booking",
  initialState: {
    booking: [],
  },
  reducers: {
    savedPlaces: (state, action) => {
      state.booking.push({ ...action.payload, tasks: [] });
    },
    DeletPlaces: (state, action) => {
      const bookingId = action.payload;
      state.booking = state.booking.filter((item) => item.id !== bookingId);
    },
  },
});

export const { savedPlaces, DeletPlaces } = SavedSlice.actions;

export default SavedSlice.reducer;
