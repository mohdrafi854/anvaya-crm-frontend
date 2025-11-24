import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// "https://anvaya-crm-backend-w37z.vercel.app/report/last-week"
export const fetchReports = createAsyncThunk("list/report", async () => {
  const response = await axios.get("https://anvaya-crm-backend-w37z.vercel.app/report/last-week");
  return response.data;
});

export const fetchReportPipeline = createAsyncThunk(
  "list/pipeline",
  async () => {
    const response = await axios.get("https://anvaya-crm-backend-w37z.vercel.app/report/pipeline");
    return response.data;
  }
);

export const fetchReportCloseByAgent = createAsyncThunk(
  "list/closeByAgent",
  async () => {
    const response = await axios.get(
      "https://anvaya-crm-backend-w37z.vercel.app/report/closed-by-agent"
    );
    return response.data;
  }
);

export const ReportSlice = createSlice({
  name: "report",
  initialState: {
    report: [],
    pipeline: [],
    closeByAgent: [],
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

    //closed by pipeline

    builder.addCase(fetchReportPipeline.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchReportPipeline.fulfilled, (state, action) => {
      state.status = "success";
      state.pipeline = action.payload.data;
    });
    builder.addCase(fetchReportPipeline.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });

    //close by Agent
    builder.addCase(fetchReportCloseByAgent.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchReportCloseByAgent.fulfilled, (state, action) => {
      state.status = "success";
      state.closeByAgent = action.payload.data;
    });
    builder.addCase(fetchReportCloseByAgent.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const addReportAsync = ReportSlice.actions;
export default ReportSlice.reducer;
