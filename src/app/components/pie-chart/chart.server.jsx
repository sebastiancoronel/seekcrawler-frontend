import PieChart from "./PieChart";

export default async function PieChartServer() {
  const response = await fetch("http://localhost:3000/pie-chart");
  const data = await response.json();
  return <PieChart data={data} />;
}
