import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
