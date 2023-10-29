import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./redux/SavedReduser";

export default configureStore({
  reducer: {
    booking: SavedReducer,
  },
});
