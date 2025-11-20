const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D", uv: 2780 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

function SimpleAreaChart() {
  return React.createElement(
    AreaChart,
    {
      width: 700,
      height: 400,
      data: data,
      margin: { top: 20, right: 0, left: 0, bottom: 0 },
    },
    [
      React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
      React.createElement(XAxis, { dataKey: "name" }),
      React.createElement(YAxis, null),
      React.createElement(Tooltip, null),
      React.createElement(Area, {
        type: "monotone",
        dataKey: "uv",
        stroke: "#8884d8",
        fill: "#8884d8",
      }),
    ]
  );
}

ReactDOM.createRoot(document.getElementById("con")).render(
  React.createElement(SimpleAreaChart)
);
