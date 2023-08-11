import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    currentJobDetail: null,
  },
  reducers: {
    setCurrentJobDetail: (state, action) => {
      const { currentJobDetail } = action.payload;
      state.currentJobDetail = currentJobDetail;
    },
  },
});

export const { setCurrentJobDetail } = jobSlice.actions;

export const selectCurrentJobDetail = (state) => state?.job?.currentJobDetail;

export default jobSlice.reducer