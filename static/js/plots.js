//Part 1
var trace1 = {
  x: ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"]
  y: "income",
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "'Bar' Chart"
};

Plotly.newPlot("plot", data, layout);