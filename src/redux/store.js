import { configureStore } from "@reduxjs/toolkit";
import eventDetailsReducer from "./eventDetailsSlice";

export const store = configureStore({
  reducer: {
    eventDetails: eventDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
