import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../feature/lead/LeadSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Leads = () => {
  const dispatch = useDispatch();
  const { leads, error, status } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(fetchLeads());
  }, []);

  const statusFiltered = leads.filter((lead) => lead.status == "New");

  return (
    <div className="right">
      {status === "loading" && <p>Loading...</p>}
      {error && <p>error</p>}
      {leads.map((lead) => (
        <span className="leadName" key={lead._id}>
          <Link to={`/lead/` + lead._id} className="leadNameLink">
            {lead.name}
          </Link>
        </span>
      ))}
      <hr />
      <h5>Lead Status:</h5>
      <p>- New: {statusFiltered.length} Leads</p>
      <p>- Contacted: {statusFiltered.length} Leads</p>
      <p>- Qualified: {statusFiltered.length} Leads</p>
      <hr />
      <p>Quick Filters:</p>
      <Link to="/addLead" className="btn btn-custom">
        Add New Lead
      </Link>
    </div>
  );
};
export default Leads;
