import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ElementState {
  value: number;
}

const initialState: ElementState = {
  value: parseInt(localStorage.getItem("numElement") || "5", 10) || 5,
};

export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      localStorage.setItem("numElement", action.payload.toString());
    },
  },
});

export const { setValue } = elementSlice.actions;

export const selectElementValue = (state: RootState) => state.element.value;

export default elementSlice.reducer;
