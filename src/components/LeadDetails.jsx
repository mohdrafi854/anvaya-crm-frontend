import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchLeads } from "../feature/lead/LeadSlice";
import { fetchComment } from "../feature/comment/CommentSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuBar from "./MenuBar";
import toast, {Toaster} from "react-hot-toast";

const LeadDetails = ({ handleMenuToggle }) => {
  const [inputComment, setInputComment] = useState("");
  const [inputValidation, setInputValidation] = useState({});
  const dispatch = useDispatch();
  const { leads, status, error } = useSelector((state) => state.leads);
  const { comment } = useSelector((state) => state.comments);

  const { id } = useParams();
  const detail = leads?.find((lead) => lead._id === id);

  const comments = comment?.comments;

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  useEffect(() => {
    if (detail?._id) {
      dispatch(fetchComment(detail._id));
    }
  }, [dispatch, detail]);

  const handleComment = async (e) => {
    e.preventDefault();
    const error = {};
    if (!inputComment) {
      error["commentText"] = "Please provide the comment";
    }
    setInputValidation(error);

    if (Object.keys(error).length > 0) {
      return;
    }

    const data = {
      commentText: inputComment,
    };
    const token = localStorage.getItem("token");
    console.log("TOKEN =>", token);
    await axios.post(
      `https://anvaya-crm-backend-w37z.vercel.app/leads/${id}/comments`,
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setInputComment("");
    dispatch(fetchComment(id));
    toast.success("Comment Added Successfully!", {
      position:"top-right",
      duration:3000,
    });
  };

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
          <Toaster/>
          <ul className="comment-unstyled">
            {Array.isArray(comments) &&
              comments?.map((comment, index) => (
                <li key={index} className="comment-list">
                  <span>
                    <strong>Author:</strong> {comment?.author?.name}
                  </span>
                  <span>
                    <strong>Comment:</strong> {comment?.commentText}
                  </span>
                </li>
              ))}
          </ul>
          <form onSubmit={handleComment}>
            <div className="comment-block">
              <textarea
                rows={2}
                cols={20}
                className="textarea-control"
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}
              >
                &nbsp;
              </textarea>
              {inputValidation["commentText"] && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "0",
                    fontSize: "11px",
                  }}
                >
                  {inputValidation["commentText"]}
                </p>
              )}
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
