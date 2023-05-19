import { createSlice } from "@reduxjs/toolkit"

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        currentAdminDetail: null,
        adminCode: null,
    },
    reducers: {      

        setCurrentAdminDetail: (state, action) => {
            const { currentAdminDetail } = action.payload;
            state.currentAdminDetail = currentAdminDetail;
        },
        setAdminCode: (state, action) => {
            const { adminCode } = action.payload;
            state.adminCode = adminCode;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentAdminDetail,
    setAdminCode,
} = adminSlice.actions;

export const selectCurrentAdminDetail = (state) =>
    state?.admin?.currentAdminDetail;
export const selectAdminCode = (state) =>
    state?.admin?.adminCode;
export default adminSlice.reducer;