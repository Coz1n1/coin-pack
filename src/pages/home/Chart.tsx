import React, { FC, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
interface Props {
  data: any;
}

export const ChartSection: FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: data.slice(0, 5).map((data: any) => data.name),
    datasets: [
      {
        label: "MarketCap",
        data: data.slice(0, 5).map((data: any) => data.marketCap),
        backgroundColor: [
          "#fa7268",
          "#ecf0f1",
          "#022139",
          "#d53867",
          "#2a71d0",
        ],
        borderWidth: 0,
      },
    ],
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="chart-header">
        Top <span className="chart-header-color">5</span> market cap coins
      </span>
      <span className="chart-small-header">
        Our specialistst can help you choose one of bellows or any other coin
        and open your private wallet
      </span>
      <Pie data={chartData} />
    </div>
  );
};
