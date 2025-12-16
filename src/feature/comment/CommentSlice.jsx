import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComment = createAsyncThunk("list/comment", async (leadId) => {
  try {
    const response = await axios.get(
      `https://anvaya-crm-backend-w37z.vercel.app/leads/${leadId}/comments`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComment.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchComment.fulfilled, (state, action) => {
      state.status = "success";
      state.comment = action.payload;
    });
    builder.addCase(fetchComment.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default CommentSlice.reducer;
