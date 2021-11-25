import React from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

const HeroStats = ({ powerstats }) => {
  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;
  const data = {
    labels: [
      "intelligence",
      "strength",
      "speed",
      "durability",
      "power",
      "combat",
    ],
    datasets: [
      {
        label: "Stats",
        data: [intelligence, strength, speed, durability, power, combat],
        fill: true,
        backgroundColor: "#222255aa",
        borderColor: "blue",
        pointBackgroundColor: "blue",
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      r: {
        grid: {
          color: "#aaa",
        },
        angleLines: {
          color: "#aaa",
        },
        pointLabels: {
          color: "white",
        },
        ticks: {
          color: "#fff",
          backdropColor: "transparent",
          min: 0,
          max: 100,
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        labels: false,
      },
    },
  };
  return (
    <>
      <h6 className="text-white text-center">Powerstats</h6>
      <Radar data={data} options={options} />
    </>
  );
};

export default HeroStats;
