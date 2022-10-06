import { createSlice } from "@reduxjs/toolkit";

const eventDetailsSlice = createSlice({
  name: 'details',
  initialState: [],
  reducers: {
    addEventDetails: (state, action) => {
      state.push(action.payload);
    }
  }
})

export const getAllDetails = (state) => state.eventDetails
export const { addEventDetails } = eventDetailsSlice.actions;
export default eventDetailsSlice.reducer;
