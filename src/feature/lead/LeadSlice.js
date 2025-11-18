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

export const quickFilter = createAsyncThunk("lead/filter", async (filterType) => {
  try {
    const response = await axios.get(`https://anvaya-crm-backend-w37z.vercel.app/leads?status=${filterType}`)
    return response.data
  } catch (error) {
    console.error("Server Error", error.message);
    
  }
})

export const LeadSlice = createSlice({
  name: "lead",
  initialState: {
    leads: [],
    createLeads: [],
    filter:[],
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
    
    //quick filter
    builder.addCase(quickFilter.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(quickFilter.fulfilled, (state, action) => {
      state.status = "success";
      state.filter = action.payload;
    });
    builder.addCase(quickFilter.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error?.message || action.payload?.message
    });

  },
});

export const {addLeadAsync} = LeadSlice.actions;
export default LeadSlice.reducer;
