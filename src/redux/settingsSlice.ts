import { createSlice } from "@reduxjs/toolkit";
import { Settings } from "../shared/classes/Settings";

const initialState = {
  time_to_focus: 20,
  time_to_rest_long: 15,
  time_to_rest_short: 10,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    saveSettings: (state, action) => {
      const payload: Settings = action.payload;
      setSettings();

      function setSettings() {
        state.time_to_focus = payload.focus;
        state.time_to_rest_long = payload.longRest;
        state.time_to_rest_short = payload.shortRest;
      }
    },
  },
});

export const { saveSettings } = settingsSlice.actions;

export const selectSettings = (state: any) => state.settings;

export default settingsSlice.reducer;