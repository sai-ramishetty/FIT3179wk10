var vg_1 = "map.json"
var vg_2 = "piechart.json"

vegaEmbed("#cmap", vg_1).then(function(result) {
    console.log("Chart rendered successfully.");
  }).catch(console.error);


  vegaEmbed("#pie", vg_2).then(function(result) {
    console.log("Chart rendered successfully.");
  }).catch(console.error);