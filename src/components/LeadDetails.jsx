import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchLeads } from "../feature/lead/LeadSlice";
import { fetchComment } from "../feature/comment/CommentSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeadDetails = () => {
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

  return (
    <div className="right">
      {status === "loading" && <p>Loading...</p>}
      {error && <p>error</p>}
      <p>Lead Name: {detail?.name}</p>
      <p>Sales Agent: </p>
      <p>Lead Source: {detail?.source}</p>
      <p>Lead Status: {detail?.status}</p>
      <p>Priority: {detail?.priority}</p>
      <p>Time to Close: {detail?.timeToClose}</p>
      <hr />
      <Link className="btn btn-custom" to={`/`}>
        Edit Lead Details Button
      </Link>
      <hr />
      <h4>Comments Section</h4>
      <ul>
        {comment?.map((c, index) => (
          <li key={index}>
            <p>id: {c._id}</p>
            <span>Author: {c.author}</span> <br />
            <span>Comment: {c.comment}</span>
          </li>
        ))}
      </ul>
      <form>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default LeadDetails;
