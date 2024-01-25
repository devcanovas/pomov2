import { createSlice } from "@reduxjs/toolkit";
import { Settings } from "../shared/classes/Settings";

const initialState = {
  time_to_focus: 20,
  time_to_rest_long: 15,
  time_to_rest_short: 10,
  wich_is_selected: "long"
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    saveSettings: (state, action) => {
      const payload: Settings = action.payload;
      setSettings();

      function setSettings() {
        state.time_to_focus = payload.time_to_focus;
        state.time_to_rest_long = payload.time_to_rest_long;
        state.time_to_rest_short = payload.time_to_rest_short;
      }
    },
    setSelected: (state, action) => {
      state.wich_is_selected = action.payload;
    }
  },
});

export const { saveSettings, setSelected } = pomodoroSlice.actions;

export const selectPomodoro = (state: any) => state.settings;
export const selectWichIsSelected = (state: any) => state.settings.wich_is_selected;

export default pomodoroSlice.reducer;