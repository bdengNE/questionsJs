
//jsonPath = "../data/network.js";

//d3.json(jsonPath, function(error, lineData) {
//    console.log(lineData);
//});

jQuery(function($) {
    $(document).ready(function () {
        console.log(networkData);

        var m = {left: 40, right: 10, top: 5, bottom: 20};

        // network view
        var totalW_network = document.getElementById('interactionView').
                                getBoundingClientRect().width - m.left - m.right;
        var totalH_network = totalW_network;

        var networkVar = {
            m: m,
            totalW: totalW_network,
            totalH: totalH_network,
            interpolate: 'basis'
        };

        drawNetworkView(networkData, '#interactionView', networkVar);

    });
});