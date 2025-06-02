import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthStatusView = createAsyncThunk(
  "view/fetch",
  async ({ key, value }) => {
    const response = await axios.get(
      `https://anvaya-crm-backend-w37z.vercel.app/leads?${key}=${value}`
    );
    return response.data;
  }
);

export const StatusViewSlice = createSlice({
  name: "statusView",
  initialState: {
    data: {
      statusView: [],
      statusViewSecond: [],
    },
    status: "idle",
    error: null,
  },
  reducers: {
    leadStatusView: (state, action) => {
      state.statusView.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fecthStatusView.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fecthStatusView.fulfilled, (state, action) => {
      state.status = "success";
      const { value } = action.meta.arg;
      state.data[value] = action.payload;
    });
    builder.addCase(fecthStatusView.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const { leadStatusView } = StatusViewSlice.actions;
export default StatusViewSlice.reducer;
