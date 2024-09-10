const donnees = {
    "section1": {
        "x": [1, 2, 3, 4],
        "y": [10, 15, 13, 17]
    },
    "section2": {
        "x": [1, 2, 3, 4],
        "y": [16, 5, 11, 9]
    }
};


function afficherGraphiquePlot(divId, data) {
    
    const graphDiv = document.getElementById(divId);
    graphDiv.innerHTML = '';  

    const chart = Plot.plot({
        marks: [
            Plot.lineY(data, { x: (d, i) => i, y: d => d, curve: "catmull-rom" }), 
            Plot.dotY(data, { x: (d, i) => i })
        ]
    });

    document.getElementById(divId).appendChild(chart);
}

const dataSection1 = donnees.section1.y; 
const dataSection2 = donnees.section2.y; 
afficherGraphiquePlot('graph1', dataSection1);
afficherGraphiquePlot('graph2', dataSection2);
