import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchLeads } from "../feature/lead/LeadSlice";
import { fetchComment } from "../feature/comment/CommentSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuBar from "./MenuBar";

const LeadDetails = ({handleMenuToggle}) => {
  const [inputComment, setInputComment] = useState("");
  const [commentMsg, setCommentMsg] = useState("");
  const dispatch = useDispatch();
  const { leads, status, error } = useSelector((state) => state.leads);
  const { comment } = useSelector((state) => state.comments);

  const { id } = useParams();
  const detail = leads?.find((lead) => lead._id === id);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  useEffect(() => {
    if (detail?._id) {
      dispatch(fetchComment(detail._id));
    }
  }, [dispatch, detail]);

  const handleComment = async(e) => {
    e.preventDefault();

    if(!inputComment){
      setCommentMsg("Please provide the message");
      return;
    }
    if(!detail?.salesAgent?._id){
      setCommentMsg("Agent ID is missing");
      return;
    }
    
      setCommentMsg("")
    

    const data = {
      author:detail?.salesAgent?._id || "",
      commentText:inputComment
    }

    await axios.post(`https://anvaya-crm-backend-w37z.vercel.app/leads/${id}/comments`, data);
    alert("Comment Added")
    setInputComment("");
    
  }

  return (
    <div className="right">
      <h1 className="main-title">
        <MenuBar handleMenuToggle={handleMenuToggle} />
        Anvaya CRM Dashboard
      </h1>
      <div className="main-sec">
        <div className="page-title">Lead Details</div>
        <div className="lead-block">
          {status === "loading" && <p>Loading...</p>}
          {error && <p>error</p>}
          <p>Lead Name: {detail?.name}</p>
          <p>Sales Agent: </p>
          <p>Lead Source: {detail?.source}</p>
          <p>Lead Status: {detail?.status}</p>
          <p>Priority: {detail?.priority}</p>
          <p>Time to Close: {detail?.timeToClose}</p>

          <Link className="btn btn-custom" to={`/editLead/${id}`}>
            Edit Lead
          </Link>
        </div>
        <div className="lead-block" style={{ marginTop: "30px" }}>
          <h4>Comments Section</h4>
          <ul>

            {Array.isArray(comment) && 
            comment?.map((c, index) => (
              <li key={index}>
                <p>id: {c._id}</p>
                <span>Author: {c.author}</span> <br />
                <span>Comment: {c.comment}</span>
              </li>
            ))}
          </ul>
          <form onSubmit={handleComment}>
            <div className="comment-block">
              <textarea rows={2} cols={20} className="textarea-control" value={inputComment} onChange={(e) => setInputComment(e.target.value)}>
                &nbsp;
              </textarea>
              {commentMsg && <p>{commentMsg}</p>}
              <button
                type="submit"
                className="btn btn-custom"
                style={{ marginTop: "15px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LeadDetails;
