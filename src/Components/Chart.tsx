import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type IProps = {
  data: any;
};
const Chart = (props: IProps) => {
  const { data } = props;
  const colors: any = [
    { id: 0, background: "#FAD0D7", border: "#ff1f48" },
    { id: 1, background: "#A2AAD1", border: "#00126b" },
    { id: 2, background: "#F3E5AE", border: "#f1c40f" },
    { id: 3, background: "#BAEBC2", border: "#4cd964" },
    { id: 4, background: "#D0D0EE", border: "#5856d6" },
    { id: 5, background: "#9AC3F0", border: "#007aff" },
    { id: 6, background: "#E7CFD6", border: "#E36588" },
    { id: 7, background: "#AFE2CE", border: "#0CC279" },
    { id: 8, background: "#F7F5B0", border: "#FFFC31" },
    { id: 8, background: "#F1FFD0", border: "#ACF306" },
  ];

  const getColor = (id: number, prop: string) => {
    let color = colors.filter((f: any) => f.id === id);

    if (prop === "border") {
      return color[0].border;
    } else {
      return color[0].background;
    }
  };
  const getGravity = (param: any) => {
    let paramFormated = Number(param.replace(/[^0-9.]+/g, ""));
    return isNaN(paramFormated) ? 0 : paramFormated;
  };

  const dataset = data.map((planet: any, index: number) => {
    return {
      label: planet.name,
      data: [
        Number(planet.rotation_period),
        Number(planet.orbital_period),
        getGravity(planet.gravity),
        Number(planet.diameter),
        Number(planet.surface_water),
        isNaN(Number(planet.population))
          ? 0
          : Number(planet.population / 1000000),
      ],

      backgroundColor: getColor(index, "background"),
      // backgroundColor: ensure(colors.find((f: any) => f.id === planet.index))
      //   .background,

      borderColor: getColor(index, "border"),
      // pointBackgroundColor: ensure(
      //   colors.find((f: any) => f.id === planet.index)
      // ).border,
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: ensure(
      //   colors.find((f: any) => f.id === planet.index)
      // ).border,
    };
  });

  return (
    <Radar
      width={600}
      height={600}
      data={{
        labels: [
          "rotation_period",
          "orbital_period",
          "gravity",
          "diameter",
          "surface_water",
          "population (million)",
        ],
        datasets: dataset,
      }}
    />
  );
};

export default Chart;
