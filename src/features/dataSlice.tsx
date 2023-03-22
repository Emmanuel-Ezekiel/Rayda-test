import { createSlice } from "@reduxjs/toolkit";
import ApiRequest from "../api/api";
import type { RootState } from "../store/store";

type State = {
  loading: boolean;
  error: any;
  data: any;
};

//initialState from the Store
const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

//Api function
const { fetchData } = ApiRequest();

//Reducer controlling the request
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectData = (state: RootState) => state.data;

export default dataSlice.reducer;
