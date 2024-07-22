import JobsTable from "../components/table/JobsTable";
export default async function JobsServer() {
  const response = await fetch("http://localhost:3000/jobs");
  const data = await response.json();
  return <JobsTable jobs={data} />;
}
