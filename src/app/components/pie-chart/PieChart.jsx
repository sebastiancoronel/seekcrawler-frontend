'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePieCanvas } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CustomTooltip = ({ datum }) => (
  <div style={{ color: 'white', backgroundColor: 'black', padding: '5px', borderRadius: '3px' }}>
      <strong>{datum.id}</strong>: {datum.value}
  </div>
);

const PieChart = ({ data }) => (
  <ResponsivePieCanvas
    data={data}
    margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={40}
    colors={{ scheme: "paired" }}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.6]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="white"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="black"
    tooltip={CustomTooltip}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 140,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 60,
        itemHeight: 14,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 14,
        symbolShape: "circle",
      },
    ]}
  />
);

export default PieChart;
