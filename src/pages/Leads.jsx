import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../feature/lead/LeadSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
const Leads = ({handleMenuToggle}) => {
  const dispatch = useDispatch();
  const { leads, error, status } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  const [selectedStatus, setSelectedStatus] = useState("");

  const statusFiltered = selectedStatus
    ? leads.filter((lead) => lead.status === selectedStatus)
    : leads;



  return (
    <div className="right">
      <h1 className="main-title">
        <MenuBar handleMenuToggle={handleMenuToggle}/>
        Anvaya CRM Dashboard
      </h1>
      <div className="main-sec">
        <div className="page-title">Dashboard</div>
        {status === "loading" && <p>Loading...</p>}
        {error && <p>error</p>}
        <div className="lead-block">
          <h6 className="leads-title">Leads</h6>
          {statusFiltered.map((lead) => (
            <span className="leadName" key={lead._id}>
              <Link to={`/lead/` + lead._id} className="leadNameLink">
                {lead.name}
              </Link>
            </span>
          ))}
        </div>

        <div className="leads-block">
          <h5 className="leads-title">Lead Status:</h5>
          {!selectedStatus && (
            <>
              <p>
                New:&nbsp;
                {leads.filter((lead) => lead.status === "New").length}
                &nbsp;Leads
              </p>
              <p>
                Contacted:&nbsp;
                {
                  leads.filter((lead) => lead.status === "Contacted")
                    .length
                }
                &nbsp;Leads
              </p>
              <p>
                Qualified:&nbsp;
                {
                  leads.filter((lead) => lead.status === "Qualified")
                    .length
                }
                &nbsp;Leads
              </p>
            </>
          )}

          {selectedStatus && (
            <p>
              {selectedStatus}: {statusFiltered.length} Leads
            </p>
          )}
        </div>
       
        <p>
          Quick Filters:
          <button
            className="btn btn-default"
            onClick={() => setSelectedStatus("New")}
          >
            New
          </button>
          <button
            className="btn btn-default"
            onClick={() => setSelectedStatus("Contacted")}
          >
            Contacted
          </button>
                    <button
            className="btn btn-default"
            onClick={() => setSelectedStatus("Qualified")}
          >
            Qualified
          </button>
          <button
            className="btn btn-default"
            onClick={() => setSelectedStatus("")}
          >
            All
          </button>
        </p>
        <Link to="/addLead" className="btn btn-custom">
          Add New Lead
        </Link>
      </div>
    </div>
  );
};
export default Leads;
