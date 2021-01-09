// //Part 1
// var trace1 = {
//   x: ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"],
//   y: [ 1883, 1861, 1497, 1248, 887, 833, 746, 5.4],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Pay ($ Weekly) vs Educational Attainment "
// };

// Plotly.newPlot("plot", data, layout);


////////////////
// Initializes the page with a default plot
function init() {
    data = [{
        x: ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"],
        y: [ 1883, 1861, 1497, 1248, 887, 833, 746, 5.4],
        type: "bar",
        marker: {color: 'crimson'}
     }];

    // Define the plot layout
    layout = {
        title: "Educational Attainment vs Weekly Pay ($)",
        xaxis: { title: "Educational Attainment" },
        yaxis: { title: "Weekly Pay ($)" }
    };
  
    var CHART = d3.selectAll("#plot").node();
  
    Plotly.newPlot(CHART, data, layout);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("body").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.node().value;
  
    var CHART = d3.selectAll("#plot").node();
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
    var title = [];
  
    switch(dataset) {
      case "dataset1":
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [ 1883, 1861, 1497, 1248, 887, 833, 746, 5.4];
        update = {
            title: "Educational Attainment vs Weekly Pay ($)",
            xaxis: { title: "Educational Attainment" },
            yaxis: { title: "Weekly Pay ($)" }
        };
        break;
  
      case "dataset2":
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [1.1, 1.6, 2, 2.2, 2.7, 3.3, 3.7, 5.4];
        update = {
            title: "Educational Attainment vs Unemployment (%)",
            xaxis: { title: "Educational Attainment" },
            yaxis: { title: "Unemployment (%)" }
        };
        break;
  
      case "dataset3":
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [ 20, 20, 36, 29, 7, 8, 0, 0];
        update = {
            title: "Educational Attainment vs Share of Student Debt (%)",
            xaxis: { title: "Educational Attainment" },
            yaxis: { title: "Share of Student Debt (%)" }
        };
        break;
  
      default:
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [ 1883, 1861, 1497, 1248, 887, 833, 746, 5.4];
        update = {
            title: "Educational Attainment vs Weekly Pay ($)",
            xaxis: { title: "Educational Attainment" },
            yaxis: { title: "Weekly Pay ($)" }
        };
        break;
    }
  
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);
    Plotly.relayout(CHART, update);
  }
  
  init();
  

