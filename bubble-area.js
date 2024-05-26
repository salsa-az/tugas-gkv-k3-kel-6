
// src: https://plotly.com/javascript/ajax-call/
function makeBubble() {
    Plotly.d3.csv("FAO-rice.csv", function(data){ processBubble(data) } );
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// src: https://plotly.com/javascript/bubble-charts/
function processBubble(allRows) {
    console.log(allRows);
    let data = [];
    
    for (let i=0; i<allRows.length; i++) {
        let row = allRows[i];
        let size = +row['Y2009'] + +row['Y2010'] + +row['Y2011'] + +row['Y2012'] + +row['Y2013'];
        if (size > 0) {
            data.push({
                x: row['latitude'],
                y: row['longitude'],
                size: Math.sqrt(size),
                color: getRandomColor(),
                text: row['Area']
            });
        }
    }
    
    // Sort the data based on the size
    data.sort((a, b) => b.size - a.size);
    
    let traces = [{
        x: data.map(d => d.x),
        y: data.map(d => d.y),
        mode: 'markers',
        marker: {
            color: data.map(d => d.color),
            size: data.map(d => d.size),
            sizemode: 'diameter'
        },
        text: data.map(d => d.text)
    }];
    
    let layout = {
        title: 'Plotting CSV data from AJAX call',
        font: { size: 18 },
        height: 800
    };
    let config = { responsive: true };

    Plotly.newPlot('bubble', traces, layout, config);
};
makeBubble();

AREA = document.getElementById('area-chart');

function makeplot() {
    Plotly.d3.csv("all.csv", function(regionData) {
        Plotly.d3.csv("FAO-rice.csv", function(riceData) {
            processArea(regionData, riceData);
        });
    });
}

function processArea(regionData, riceData) {
    let countries = {}; 
    let countryNames = []; 
    let subRegions = {}; 

    // region data
    for (let i = 0; i < regionData.length; i++) {
        let row = regionData[i];
        subRegions[row['alpha-3']] = row['sub-region'];
        console.log(row['alpha-3'], row['sub-region']);
    }

    // Sort rice data agar yang nilainya lebih kecil muncul di depan
    riceData.sort((a, b) => {
        let totalA = +a['Y2009'] + +a['Y2010'] + +a['Y2011'] + +a['Y2012'] + +a['Y2013'];
        let totalB = +b['Y2009'] + +b['Y2010'] + +b['Y2011'] + +b['Y2012'] + +b['Y2013'];
        return totalA - totalB; // ascending
    });

    // rice data
    for (let i = 0; i < riceData.length; i++) {
        let row = riceData[i];
        let country = row['Area Abbreviation']; // Key untuk mencocokkan dengan sub-reigion
       
        let totalProduction = +row['Y2009'] + +row['Y2010'] + +row['Y2011'] + +row['Y2012'] + +row['Y2013'];

        // Normalisasi produksi pada area chart
        let normalizedProduction = [
            +row['Y2009'] / totalProduction,
            +row['Y2010'] / totalProduction,
            +row['Y2011'] / totalProduction,
            +row['Y2012'] / totalProduction,
            +row['Y2013'] / totalProduction
        ];

        let alpha3 = Object.keys(subRegions).find(key => row['Area Abbreviation'] === key);
        let negara = Object.keys(subRegions).find(key => row['Area'] === key);
        if (alpha3 && totalProduction) {
            if (!countries[alpha3]) {
                countries[alpha3] = {
                    x: ['Y2009', 'Y2010', 'Y2011', 'Y2012', 'Y2013'],
                    y: normalizedProduction,
                    type: 'scatter',
                    fill: 'tozeroy',
                    stackgroup: subRegions[alpha3] || 'Unknown', // Unknown untuk negara dengan sub-region tidak diketahui
                    name: row['Area'] 
                };
                countryNames.push(alpha3);
            } else {
                // Add production data to existing country, update y-values
                countries[alpha3].y = countries[alpha3].y.map((val, idx) => val + normalizedProduction[idx]);
            }
        }
    }

    let subRegionCountries = {};
    for (let country in countries) {
        let subRegion = subRegions[country];
        if (!subRegionCountries[subRegion]) {
            subRegionCountries[subRegion] = [];
        }
        subRegionCountries[subRegion].push(countries[country]);
    }

    Plotly.newPlot('area-chart', subRegionCountries[Object.keys(subRegionCountries)[0]], {title: 'Production by Sub-Region'});

    // Dropdown untuk sub-region
    let dropdown = document.getElementById('subregion-dropdown'); // Change this line
    for (let subRegion in subRegionCountries) {
        let option = document.createElement('option');
        option.text = subRegion;
        option.value = subRegion;
        dropdown.add(option);
    }

    dropdown.addEventListener('change', function() {
        Plotly.newPlot('area-chart', subRegionCountries[this.value], {title: 'Production by ' + this.value});
    });
}

makeplot();



// var plotDiv = document.getElementById('plot');
// var traces = [
// 	{x: [1,2,3], y: [2,1,4], stackgroup: 'one'},
// 	{x: [1,2,3], y: [1,1,2], stackgroup: 'one'},
// 	{x: [1,2,3], y: [3,0,2], stackgroup: 'one'}
// ];

// Plotly.newPlot('area-chart', traces, {title: 'stacked and filled line chart'});