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
        type: "bar"
     }];
  
    var CHART = d3.selectAll("#plot").node();
  
    Plotly.newPlot(CHART, data);
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
  
    switch(dataset) {
      case "Weekly Pay by Educational Attainment":
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [ 1883, 1861, 1497, 1248, 887, 833, 746, 5.4];
        break;
  
      case "dataset2":
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [1.1, 1.6, 2, 2.2, 2.7, 3.3, 3.7, 5.4];
        break;
  
    //   case "dataset3":
    //     x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
    //     y = [10, 100, 50, 10, 0];
    //     break;
  
      default:
        x = ["Doctoral degree", "Professional degree"," Master's degree", "Bachelor's degree", "Associate's degree", "Some college, no degree","High school diploma", "Less than a high school diploma"];
        y = [ 1883, 1861, 1497, 1248, 887, 833, 746, 5.4];
        break;
    }
  
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);
  }
  
  init();
  