"use client";
import PieChartServer from "../components/pie-chart/chart.server";
import BarChartServer from "../components/bar-chart/chart.server";
import StatsServer from "../components/stats/stats.server";
export default function Charts() {
  return (
    <>
      <div className="flex flex-col gap-2 h-screen">
        <div className="card h-screen flex flex-col bg-slate-800">
          <div className="card-body h-full w-full">
            <div className="flex w-full">
              <StatsServer />
            </div>
            <div className="w-full h-[400px]">
              <PieChartServer />
            </div>
          </div>
          <div className="w-full h-screen">
            <BarChartServer />
          </div>
        </div>
      </div>
    </>
  );
}
