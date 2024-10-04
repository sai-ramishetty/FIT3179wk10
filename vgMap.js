var vg_1 = "map.json"
vegaEmbed("#cmap", vg_1).then(function(result) {
    console.log("Chart rendered successfully.");
  }).catch(console.error);