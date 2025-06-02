import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReports = createAsyncThunk("list/report", async () => {
  const response = await axios.get(
    "https://anvaya-crm-backend-w37z.vercel.app/report/last-week"
  );
  return response.data;
});

export const ReportSlice = createSlice({
  name: "report",
  initialState: {
    report: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addReportAsync: (state, action) => {
      state.report.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReports.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.status = "success";
      state.report = action.payload;
    });
    builder.addCase(fetchReports.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const addReportAsync = ReportSlice.actions;
export default ReportSlice.reducer;
