import Stats from "./Stats";

export default async function StatsServer() {
  const response = await fetch("http://localhost:3000/stats");
  const data = await response.json();
  return <Stats data={data} />;
}
