import { createSlice } from "@reduxjs/toolkit"

const seekerSlice = createSlice({
    name: "seeker",
    initialState: {
        currentSeekerDetail: null,
        seekerCode: null,
    },
    reducers: {
        setCurrentSeekerDetail: (state, action) => {
            const { currentSeekerDetail } = action.payload;
            state.currentSeekerDetail = currentSeekerDetail;
        },        
        setSeekerCode: (state, action) => {
            const { seekerCode } = action.payload;
            state.seekerCode = seekerCode;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentSeekerDetail,
    setSeekerCode,
} = seekerSlice.actions;

export const selectCurrentSeekerDetail = (state) =>
    state?.seeker?.currentSeekerDetail;
export const selectSeekerCode = (state) =>
    state?.seeker?.seekerCode;
export default seekerSlice.reducer;