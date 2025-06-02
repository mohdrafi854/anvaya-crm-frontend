import { useSelector, useDispatch } from "react-redux";
import { fecthStatusView } from "../feature/statusView/StatusViewSlice";
import { useEffect } from "react";

const LeadStatusView = () => {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.leadStatusView);
  console.log(error);

  useEffect(() => {
    dispatch(fecthStatusView({ key: "status", value: "NEW" }));
    dispatch(fecthStatusView({ key: "name", value: "John Doe" }));
  }, []);

  return (
    <div className="right">
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h1>Lead List by Status</h1>
      <hr />
      <p>Status: {data["John Doe"].name}</p>
      <p>Lead 1 - {data["John Doe"].name}</p>
      <p>Filters : {data["John Doe"].name} </p>
      <p>Sort by: {}</p>
    </div>
  );
};
export default LeadStatusView;
