import { useSelector, useDispatch } from "react-redux";
import { fetchReports } from "../feature/report/ReportSlice";
import { useEffect } from "react";
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

export const data = {
  labels: ["Leads Closed Last Week", "Total Leads in Pipeline"],
  datasets: [
    {
      data: [1, 2],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

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
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const dataTwo = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [0, 100, 200, 400, 600],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [0, 200, 400, 600, 800],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Reports = () => {
  const dispatch = useDispatch();

  const { report, status, error } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(fetchReports());
  }, []);

  return (
    <div className="right">
      <h4>Total Leads closed and in Pipeline</h4>
      <div style={{ width: "300px", height: "300px" }}>
        <Pie data={data} width={200} height={200} />
      </div>
      <h4>Leads Closed by Sales Agent</h4>
      <Bar options={options} data={dataTwo} />
      <h4>Lead Status Distribution</h4>
      <div style={{ width: "300px", height: "300px" }}>
        <Pie data={dataStatusDistribution} width={200} height={200} />
      </div>
    </div>
  );
};
export default Reports;
