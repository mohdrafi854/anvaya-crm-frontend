import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAgentList = createAsyncThunk("list/agent", async () => {
  const response = await axios.get(
    "https://anvaya-crm-backend-w37z.vercel.app/agents"
  );
  return response.data;
});

export const AgentSlice = createSlice({
  name: "salesAgent",
  initialState: {
    agent: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addAgentAsync: (state, action) => {
      state.agent.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAgentList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAgentList.fulfilled, (state, action) => {
      state.status = "success";
      state.agent = action.payload;
    });
    builder.addCase(fetchAgentList.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const addAgentAsync = AgentSlice.actions;
export default AgentSlice.reducer;
