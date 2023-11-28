import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "Hello World",
};

const textSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        changeText(state, action) {
            state.text = action.payload
        }
    },
});

export const { changeText } = textSlice.actions;
export default textSlice.reducer;