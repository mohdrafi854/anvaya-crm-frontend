import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeads = createAsyncThunk("fetch/leads", async () => {
  const response = await axios.get(
    "https://anvaya-crm-backend-w37z.vercel.app/leads"
  );
  return response.data;
});

export const fetchAgents = createAsyncThunk("fetch/agents", async () => {
  const response = await axios.get(
    "https://anvaya-crm-backend-w37z.vercel.app/agents"
  );
  return response.data;
});

export const deleteLead = createAsyncThunk("delete/lead", async (leadId) => {
  try {
    await axios.delete(
      `https://anvaya-crm-backend-w37z.vercel.app/leads/${leadId}`
    );
    return leadId;
  } catch (error) {
    console.error(error.message);
  }
});

export const deleteAgent = createAsyncThunk("delete/agent", async (agentId) => {
  try {
    await axios.delete(
      `https://anvaya-crm-backend-w37z.vercel.app/agents/${agentId}`
    );
    return agentId
  } catch (error) {
    console.error(error.message);
  }
});

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    setting: [],
    agents: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLeads.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLeads.fulfilled, (state, action) => {
      state.status = "success";
      state.setting = action.payload;
    });
    builder.addCase(fetchLeads.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //agents
    builder.addCase(fetchAgents.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAgents.fulfilled, (state, action) => {
      state.status = "success";
      state.agents = action.payload;
    });
    builder.addCase(fetchAgents.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //delete Leads
    builder.addCase(deleteLead.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteLead.fulfilled, (state, action) => {
      state.status = "success";
      state.setting = state.setting.filter(
        (lead) => lead._id !== action.payload
      );
    });
    builder.addCase(deleteLead.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    // delete agents
    builder.addCase(deleteAgent.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteAgent.fulfilled, (state, action) => {
      state.status = "success";
      state.agents = state.agents.filter(
        (agent) => agent._id !== action.payload
      );
    });
    builder.addCase(deleteAgent.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});
export default settingSlice.reducer;
