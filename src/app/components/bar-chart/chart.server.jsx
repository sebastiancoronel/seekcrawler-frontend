import BarChart from "./BarChart"
export default async function BarChartServer(){
    const response = await fetch('http://localhost:3000/salaries')
    const data = await response.json()
    return <BarChart data={data}/>
}