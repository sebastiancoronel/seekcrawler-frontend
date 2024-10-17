'use client'
import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const BarChart = ({ data }) => {
  const formattedData = data.map((item) => ({
    role: item.role,
    salary: parseInt(item.salary, 10),
  }));

  
  return (
    <ResponsiveBar
      data={formattedData}
      keys={["salary"]}
      indexBy="role"
      margin={{ top: 50, right: 10, bottom: 100, left: 60 }}
      padding={0.5}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "category10" }}
      borderColor={{ from: "color", modifiers: [["brighter", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Salary",
        legendPosition: "start",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      label={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    //   legends={[
    //     {
    //       dataFrom: "keys",
    //       anchor: "bottom-right",
    //       direction: "column",
    //       justify: false,
    //       translateX: 120,
    //       translateY: 0,
    //       itemsSpacing: 5,
    //       itemWidth: 100,
    //       itemHeight: 20,
    //       itemDirection: "left-to-right",
    //       itemOpacity: 1,
    //       symbolSize: 20,
    //       effects: [
    //         {
    //           on: "hover",
    //           style: {
    //             itemOpacity: 1,
    //           },
    //         },
    //       ],
    //     },
    //   ]}
      tooltip={({ id, value, color, indexValue }) => (
        <div
            style={{
                padding: '12px',
                color,
                background: '#222222',
                borderRadius: '4px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
            }}
        >
            <strong>{indexValue}</strong><br />
            Salary: {value}
        </div>
    )}
    theme={{
        axis: {
          ticks: {
            text: {
              fill: '#ffffff',
            }
          }
        }
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        `${e.id}: ${e.formattedValue} in role: ${e.indexValue}`
      }
    />
  );
};

export default BarChart;
