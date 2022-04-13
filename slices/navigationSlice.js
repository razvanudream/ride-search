import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  rideData: null,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setRideData: (state, action) => {
      state.rideData = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setRideData } =
  navigationSlice.actions;

export const selectOrigin = (state) => state.navigation.origin;
export const selectDestination = (state) => state.navigation.destination;
export const selectRideData = (state) => state.navigation.rideData;

export default navigationSlice.reducer;
