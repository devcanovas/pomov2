import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time_to_focus: 20,
  time_to_rest_long: 15,
  time_to_rest_short: 10,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    saveSettings: (state) => {
      console.log(state);
    },
  },
});

export const { saveSettings } = settingsSlice.actions;

export const selectSettings= (state) => state.settings;

export default settingsSlice.reducer;