import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeads = createAsyncThunk("lead/fetchLeads", async () => {
  try {
      const response = await axios.get(
    "https://anvaya-crm-backend-w37z.vercel.app/leads"
  );
  return response.data;
  } catch (error) {
    console.error("Server Error:", error)
  }

});

export const postLead = createAsyncThunk("lead/postLead", async (formData) => {
  try {
      const response = await axios.post(
    "https://anvaya-crm-backend-w37z.vercel.app/leads",
    formData
  );
  return response.data;
  } catch (error) {
    
    console.error("Server Error", error)
  }
});

export const LeadSlice = createSlice({
  name: "lead",
  initialState: {
    leads: [],
    createLeads: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addLeadAsync: (state, action) => {
      state.leads.push(action.payload);
    },
    // addFormAsync: (state, action) => {
    //   state.createLeads.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeads.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLeads.fulfilled, (state, action) => {
      state.status = "success";
      state.leads = action.payload;
    });
    builder.addCase(fetchLeads.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload?.message || action.error?.message || "Something went wrong";
      
    });

    //post leads logic
    builder.addCase(postLead.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postLead.fulfilled, (state, action) => {
      state.status = "success";
      state.createLeads = action.payload;
    });
    builder.addCase(postLead.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error?.message || action.payload?.message
    });
  },
});

export const {addLeadAsync} = LeadSlice.actions;
export default LeadSlice.reducer;
