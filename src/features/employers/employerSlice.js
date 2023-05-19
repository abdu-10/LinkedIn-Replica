import { createSlice } from "@reduxjs/toolkit"

const employerSlice = createSlice({
    name: "employer",
    initialState: {
        currentEmployerDetail: null,
        employerCode: null,
    },
    reducers: {      

        setCurrentEmployerDetail: (state, action) => {
            const { currentEmployerDetail } = action.payload;
            state.currentEmployerDetail = currentEmployerDetail;
        },
        setEmployerCode: (state, action) => {
            const { employerCode } = action.payload;
            state.employerCode = employerCode;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentEmployerDetail,
    setEmployerCode,
} = employerSlice.actions;

export const selectCurrentEmployerDetail = (state) =>
    state?.employer?.currentEmployerDetail;
export const selectEmployerCode = (state) =>
    state?.employer?.employerCode;
export default employerSlice.reducer;