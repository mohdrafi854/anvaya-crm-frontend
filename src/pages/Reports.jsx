import { useSelector, useDispatch } from "react-redux";
import { fetchReports, fetchReportPipeline, fetchReportCloseByAgent } from "../feature/report/ReportSlice";
import { useEffect } from "react";
import MenuBar from "../components/MenuBar";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,

  Tooltip,
  Legend
);

export const dataStatusDistribution = {
  labels: ["Leads Closed Last Week", "Total Leads in Pipeline"],
  datasets: [
    {
      label: "",
      data: ["60", "40"],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};




const Reports = ({handleMenuToggle}) => {
  const dispatch = useDispatch();

  const { report, pipeline, closeByAgent} = useSelector((state) => state.reports);


  useEffect(() => {
    dispatch(fetchReports());
    dispatch(fetchReportPipeline());
    dispatch(fetchReportCloseByAgent());
  }, [dispatch]);

  

  const leads = report?.data || [];
  const leadsClosedLastWeek = leads.length;

  const totalPipeline = pipeline?.filter(item => item.status !== 'Closed')
  .reduce((sum, item) => sum + item.count, 0);

  



  const reportClosedByStatus = {
  labels: ["Leads Closed Last Week", "Total Leads in Pipeline"],
  datasets: [
    {
      data: [leadsClosedLastWeek, totalPipeline],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};


const safeCloseByAgent = Array.isArray(closeByAgent) ? closeByAgent : [];
const labels = safeCloseByAgent.map(item => item.salesAgentName);

const barChartData = {
  labels: labels.length > 0 ? labels : ["No Data"],
  datasets: [
    {
      label: "Leads Closed",
      data: labels.length > 0 ? safeCloseByAgent.map(item => item.closedCount) : [0],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1
    }
  ]
};

  return (
    <div className="right">
      <h1 className="main-title">
       <MenuBar handleMenuToggle={handleMenuToggle}/>
        Anvaya CRM Dashboard
      </h1>
      <div className="main-sec">
        <div className="page-title">Reports</div>
        <div className="lead-block">
          <h4 className="leads-title">Total Leads closed and in Pipeline</h4>
          <div style={{ width: "300px", height: "300px", margin:"0 auto" }}>
            <Pie data={reportClosedByStatus} width={200} height={200} />
          </div>
        </div>
        <div className="lead-block" style={{marginTop:"30px"}}>
          <h4 className="leads-title">Leads Closed by Sales Agent</h4>
          <div className="lcsa" style={{ width: "900px", height: "500px" }}>
            <Bar options={options} data={barChartData} />
          </div>
        </div>

        <div className="lead-block" style={{marginTop:"30px"}}>
          <h4 className="leads-title">Lead Status Distribution</h4>
          <div style={{ width: "300px", height: "300px", margin:"0 auto" }}>
            <Pie data={dataStatusDistribution} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reports;
