import { configureStore } from "@reduxjs/toolkit";
import { LeadSlice } from "../feature/lead/LeadSlice";
import { AgentSlice } from "../feature/agent/AgentSlice";
import { CommentSlice } from "../feature/comment/CommentSlice";
import { ReportSlice } from "../feature/report/ReportSlice";
import { StatusViewSlice } from "../feature/statusView/StatusViewSlice";

export default configureStore({
  reducer: {
    leads: LeadSlice.reducer,
    agent: AgentSlice.reducer,
    comments: CommentSlice.reducer,
    reports: ReportSlice.reducer,
    leadStatusView: StatusViewSlice.reducer,
  },
});
