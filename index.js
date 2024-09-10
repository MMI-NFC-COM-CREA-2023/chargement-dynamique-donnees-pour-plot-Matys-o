import * as Plot from "@observablehq/plot";

const dataSection1 = [
  { date: new Date(2021, 0, 1), value: 100 },
  { date: new Date(2021, 1, 1), value: 120 },
  { date: new Date(2021, 2, 1), value: 140 },
  { date: new Date(2021, 3, 1), value: 110 },
  { date: new Date(2021, 4, 1), value: 160 },
];

const dataSection2 = [
  { date: new Date(2021, 0, 1), value: 200 },
  { date: new Date(2021, 1, 1), value: 180 },
  { date: new Date(2021, 2, 1), value: 190 },
  { date: new Date(2021, 3, 1), value: 210 },
  { date: new Date(2021, 4, 1), value: 230 },
];

const chart1 = Plot.plot({
  x: {
    type: "time",
    label: "Date",
  },
  y: {
    label: "Valeur",
  },
  marks: [
    Plot.line(dataSection1, { x: "date", y: "value", stroke: "blue" }),
    Plot.dot(dataSection1, { x: "date", y: "value", fill: "red" }),
  ],
});

const chart2 = Plot.plot({
  x: {
    type: "time",
    label: "Date",
  },
  y: {
    label: "Valeur",
  },
  marks: [
    Plot.line(dataSection2, { x: "date", y: "value", stroke: "green" }),
    Plot.dot(dataSection2, { x: "date", y: "value", fill: "orange" }),
  ],
});

document.getElementById("graph1").appendChild(chart1);
document.getElementById("graph2").appendChild(chart2);
