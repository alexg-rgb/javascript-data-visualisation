//First chart
var table = document.getElementById('table1');
var tableArr = [];
var tableLab = [];

for (var i = 1; i < table.rows.length; i++) {
  tableArr.push([
    table.rows[i].cells[1].innerHTML,
    table.rows[i].cells[2].innerHTML,
    table.rows[i].cells[3].innerHTML,
    table.rows[i].cells[4].innerHTML,
    table.rows[i].cells[5].innerHTML,
    table.rows[i].cells[6].innerHTML,
    table.rows[i].cells[7].innerHTML,
    table.rows[i].cells[8].innerHTML,
    table.rows[i].cells[9].innerHTML,
    table.rows[i].cells[10].innerHTML,
    table.rows[i].cells[11].innerHTML,
    table.rows[i].cells[12].innerHTML,
  ]);
  tableLab.push(table.rows[i].cells[0].innerHTML)
}

for (var j = 0; j < tableArr.length; j++) {
  tableArr[j].shift();
}

for (var k = 1; k < tableArr.length; k++) {
  tableArr[k] = tableArr[k].map(parseFloat);
}



var div = document.createElement("div");
div.setAttribute("id", "divOne");
var target = document.getElementById("table1");
target.parentNode.insertBefore(div, target);
document.body.innerHTML += '<canvas id="chartOne"></canvas>';
var targetTwo = document.getElementById("divOne");
var canvaElement = document.getElementById("chartOne");
targetTwo.appendChild(canvaElement);



var canvasOne = document.getElementById("chartOne");
canvasOne.height = 300;

var ctxOne = document.getElementById("chartOne").getContext("2d");


var myLineChart = new Chart(ctxOne, {
  type: 'line',
  data: {
    labels: tableArr[0],
    datasets: [{
      data: tableArr[1],
      label: table.rows[2].cells[1].innerHTML,
      borderColor: "#fbbf48",
      fill: false
    }, {
      data: tableArr[2],
      label: table.rows[3].cells[1].innerHTML,
      borderColor: "#851ca0",
      fill: false
    }, {
      data: tableArr[3],
      label: table.rows[4].cells[1].innerHTML,
      borderColor: "#28e769",
      fill: false
    }, {
      data: tableArr[4],
      label: table.rows[5].cells[1].innerHTML,
      borderColor: "#18b702",
      fill: false
    }, {
      data: tableArr[5],
      label: table.rows[6].cells[1].innerHTML,
      borderColor: "#4bb95a",
      fill: false
    }, {
      data: tableArr[6],
      label: table.rows[7].cells[1].innerHTML,
      borderColor: "#b04dc7",
      fill: false
    }, {
      data: tableArr[7],
      label: table.rows[8].cells[1].innerHTML,
      borderColor: "#38d79c",
      fill: false
    }, {
      data: tableArr[8],
      label: table.rows[9].cells[1].innerHTML,
      borderColor: "#9fb8db",
      fill: false
    }, {
      data: tableArr[9],
      label: table.rows[10].cells[1].innerHTML,
      borderColor: "#d4816c",
      fill: false
    }, {
      data: tableArr[10],
      label: table.rows[11].cells[1].innerHTML,
      borderColor: "#2c7c2a",
      fill: false
    }, {
      data: tableArr[11],
      label: table.rows[12].cells[1].innerHTML,
      borderColor: "#6a8163",
      fill: false
    }, {
      data: tableArr[12],
      label: table.rows[13].cells[1].innerHTML,
      borderColor: "#c2b8ac",
      fill: false
    }, {
      data: tableArr[13],
      label: table.rows[14].cells[1].innerHTML,
      borderColor: "#04c62b",
      fill: false
    }, {
      data: tableArr[14],
      label: table.rows[15].cells[1].innerHTML,
      borderColor: "#3321d7",
      fill: false
    }, {
      data: tableArr[15],
      label: table.rows[16].cells[1].innerHTML,
      borderColor: "#c45850",
      fill: false
    }, {
      data: tableArr[16],
      label: table.rows[17].cells[1].innerHTML,
      borderColor: "#9e3d60",
      fill: false
    }, {
      data: tableArr[17],
      label: table.rows[18].cells[1].innerHTML,
      borderColor: "#924d66",
      fill: false
    }, {
      data: tableArr[18],
      label: table.rows[19].cells[1].innerHTML,
      borderColor: "#8670a7",
      fill: false
    }, {
      data: tableArr[19],
      label: table.rows[20].cells[1].innerHTML,
      borderColor: "#fdb00c",
      fill: false
    }, {
      data: tableArr[20],
      label: table.rows[21].cells[1].innerHTML,
      borderColor: "#7dcebc",
      fill: false
    }, {
      data: tableArr[21],
      label: table.rows[22].cells[1].innerHTML,
      borderColor: "#375381",
      fill: false
    }, {
      data: tableArr[22],
      label: table.rows[23].cells[1].innerHTML,
      borderColor: "#8aadf3",
      fill: false
    }, {
      data: tableArr[23],
      label: table.rows[24].cells[1].innerHTML,
      borderColor: "#106139",
      fill: false
    }, {
      data: tableArr[24],
      label: table.rows[25].cells[1].innerHTML,
      borderColor: "#678807",
      fill: false
    }, {
      data: tableArr[25],
      label: table.rows[26].cells[1].innerHTML,
      borderColor: "#33b2e7",
      fill: false
    }, {
      data: tableArr[26],
      label: table.rows[27].cells[1].innerHTML,
      borderColor: "#9a6b09",
      fill: false
    }, {
      data: tableArr[27],
      label: table.rows[28].cells[1].innerHTML,
      borderColor: "#bf074a",
      fill: false
    }, {
      data: tableArr[28],
      label: table.rows[29].cells[1].innerHTML,
      borderColor: "#bd7603",
      fill: false
    }, {
      data: tableArr[29],
      label: table.rows[30].cells[1].innerHTML,
      borderColor: "#4c641c",
      fill: false
    }, {
      data: tableArr[30],
      label: table.rows[31].cells[1].innerHTML,
      borderColor: "#967159",
      fill: false
    }, {
      data: tableArr[31],
      label: table.rows[32].cells[1].innerHTML,
      borderColor: "#cd54f8",
      fill: false
    }, {
      data: tableArr[32],
      label: table.rows[33].cells[1].innerHTML,
      borderColor: "#c45850",
      fill: false
    }, {
      data: tableArr[33],
      label: table.rows[34].cells[1].innerHTML,
      borderColor: "#ab8644",
      fill: false
    }, {
      data: tableArr[34],
      label: table.rows[35].cells[1].innerHTML,
      borderColor: "#8a270b",
      fill: false
    }, {
      data: tableArr[35],
      label: table.rows[36].cells[1].innerHTML,
      borderColor: "#f3edd0",
      fill: false
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Offences recorded by the police by coountry'
    }
  }
});
//Second Chart
var table2 = document.getElementById('table2');
var tableArr2 = [];
var tableLab2 = [];

for (var l = 0; l < table2.rows.length; l++) {
  tableArr2.push([
    table2.rows[l].cells[0].innerHTML,
    table2.rows[l].cells[1].innerHTML,
    table2.rows[l].cells[2].innerHTML,
    table2.rows[l].cells[3].innerHTML,
  ]);
  tableLab2.push(table2.rows[l].cells[0].innerHTML)
}

for (var m = 0; m < tableArr2.length; m++) {
  tableArr2[m].shift();
}

for (var p = 0; p < tableArr2.length; p++) {
  tableArr2[p].shift();
}

for (var n = 1; n < tableArr2.length; n++) {
  tableArr2[n] = tableArr2[n].map(parseFloat);
}



var divTwo = document.createElement("div");
divTwo.setAttribute("id", "divTwoo");
var targetSecondDiv = document.getElementById("table2");
targetSecondDiv.parentNode.insertBefore(divTwo, targetSecondDiv);
var secondCanvas = document.createElement("canvas");
secondCanvas.setAttribute("id", "chartTwo");
divTwo.appendChild(secondCanvas);



var canvasTwo = document.getElementById("chartTwo");
canvasTwo.height = 300;

var ctxTwo = document.getElementById("chartTwo");

var myBarChart = new Chart(ctxTwo, {
  type: 'bar',
  data: {
    labels: tableArr2[0],
    datasets: [{
      data: tableArr2[1],
      label: table2.rows[1].cells[1].innerHTML,
      backgroundColor: "#fbbf48",
      fill: false
    }, {
      data: tableArr2[2],
      label: table2.rows[2].cells[1].innerHTML,
      backgroundColor: "#851ca0",
      fill: false
    }, {
      data: tableArr2[3],
      label: table2.rows[3].cells[1].innerHTML,
      backgroundColor: "#28e769",
      fill: false
    }, {
      data: tableArr2[4],
      label: table2.rows[4].cells[1].innerHTML,
      backgroundColor: "#18b702",
      fill: false
    }, {
      data: tableArr2[5],
      label: table2.rows[5].cells[1].innerHTML,
      backgroundColor: "#4bb95a",
      fill: false
    }, {
      data: tableArr2[6],
      label: table2.rows[6].cells[1].innerHTML,
      backgroundColor: "#b04dc7",
      fill: false
    }, {
      data: tableArr2[7],
      label: table2.rows[7].cells[1].innerHTML,
      backgroundColor: "#38d79c",
      fill: false
    }, {
      data: tableArr2[8],
      label: table2.rows[8].cells[1].innerHTML,
      backgroundColor: "#9fb8db",
      fill: false
    }, {
      data: tableArr2[9],
      label: table2.rows[9].cells[1].innerHTML,
      backgroundColor: "#d4816c",
      fill: false
    }, {
      data: tableArr2[10],
      label: table2.rows[10].cells[1].innerHTML,
      backgroundColor: "#2c7c2a",
      fill: false
    }, {
      data: tableArr[11],
      label: table.rows[11].cells[1].innerHTML,
      backgroundColor: "#6a8163",
      fill: false
    }, {
      data: tableArr2[12],
      label: table2.rows[12].cells[1].innerHTML,
      backgroundColor: "#c2b8ac",
      fill: false
    }, {
      data: tableArr2[13],
      label: table2.rows[13].cells[1].innerHTML,
      backgroundColor: "#04c62b",
      fill: false
    }, {
      data: tableArr2[14],
      label: table2.rows[14].cells[1].innerHTML,
      backgroundColor: "#3321d7",
      fill: false
    }, {
      data: tableArr2[15],
      label: table2.rows[15].cells[1].innerHTML,
      backgroundColor: "#c45850",
      fill: false
    }, {
      data: tableArr2[16],
      label: table2.rows[16].cells[1].innerHTML,
      backgroundColor: "#9e3d60",
      fill: false
    }, {
      data: tableArr2[17],
      label: table2.rows[17].cells[1].innerHTML,
      backgroundColor: "#924d66",
      fill: false
    }, {
      data: tableArr2[18],
      label: table2.rows[18].cells[1].innerHTML,
      backgroundColor: "#8670a7",
      fill: false
    }, {
      data: tableArr2[19],
      label: table2.rows[19].cells[1].innerHTML,
      backgroundColor: "#fdb00c",
      fill: false
    }, {
      data: tableArr2[20],
      label: table2.rows[20].cells[1].innerHTML,
      backgroundColor: "#7dcebc",
      fill: false
    }, {
      data: tableArr2[21],
      label: table2.rows[21].cells[1].innerHTML,
      backgroundColor: "#375381",
      fill: false
    }, {
      data: tableArr2[22],
      label: table2.rows[22].cells[1].innerHTML,
      backgroundColor: "#8aadf3",
      fill: false
    }, {
      data: tableArr2[23],
      label: table2.rows[23].cells[1].innerHTML,
      backgroundColor: "#106139",
      fill: false
    }, {
      data: tableArr2[24],
      label: table2.rows[24].cells[1].innerHTML,
      backgroundColor: "#678807",
      fill: false
    }, {
      data: tableArr2[25],
      label: table2.rows[25].cells[1].innerHTML,
      backgroundColor: "#33b2e7",
      fill: false
    }, {
      data: tableArr2[26],
      label: table2.rows[26].cells[1].innerHTML,
      backgroundColor: "#9a6b09",
      fill: false
    }, {
      data: tableArr2[27],
      label: table.rows[27].cells[1].innerHTML,
      backgroundColor: "#bf074a",
      fill: false
    }, {
      data: tableArr2[28],
      label: table2.rows[28].cells[1].innerHTML,
      backgroundColor: "#bd7603",
      fill: false
    }, {
      data: tableArr2[29],
      label: table2.rows[29].cells[1].innerHTML,
      backgroundColor: "#4c641c",
      fill: false
    }, {
      data: tableArr2[30],
      label: table2.rows[30].cells[1].innerHTML,
      backgroundColor: "#967159",
      fill: false
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Prison population, average per year, per country'
    }
  }
});
//Third Chart

var divThree = document.createElement("div");
divThree.setAttribute("id", "divThreee");
var targetFourthDiv = document.getElementById("bodyContent");
targetFourthDiv.parentNode.insertBefore(divThree, targetFourthDiv);
var thirdCanvas = document.createElement("canvas");
thirdCanvas.setAttribute("id", "charThree");
divThree.appendChild(thirdCanvas);
var canvasThree = document.getElementById("charThree");
canvasTwo.canvasThree = 300;
var ctxThree = document.getElementById("charThree");


var count = 10;
var dataPointsThree=[];
var dataPointsThreeUpdate=[];

  async function chartThreeBuild() {
    let response = await fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json");

    dataPointsThree = await response.json();
    let x = "x";
    let y = "y";
    dataPointsThree = dataPointsThree.map(dataPointsThree => Object.assign({x:dataPointsThree[0],y:dataPointsThree[1]}, ));
    console.log(dataPointsThree);
    var xAxis = dataPointsThree.map(({x}) => x);
    var yAxis = dataPointsThree.map(({y}) => y);
    var myHopeChart = new Chart(ctxThree, {
      type: 'line',
      data: {
          labels: xAxis,
          datasets: [{
              label: 'Live Chart', 
              data: yAxis, 
              fill: false,
              borderColor: '#2196f3', 
              backgroundColor: '#2196f3', 
              borderWidth: 1 
          }]},
      options: {
        responsive: true, 
        maintainAspectRatio: false, 
      },
  });
  updateChart()
};
chartThreeBuild();


async function updateChart() {
  var increase=9;
  let response = await fetch("https://canvasjs.com/services/data/datapoints.php?xstart="+(count=count+1)+"&ystart=10&length=1&type=json");
    dataPointsThreeNew = await response.json();
    let x = "x";
    let y = "y";
    dataPointsThreeNew = dataPointsThreeNew.map(dataPointsThreeNew => Object.assign({x:dataPointsThreeNew[0],y:dataPointsThreeNew[1]}, ));
    console.log(dataPointsThreeNew);
    dataPointsThree.push(dataPointsThreeNew[0]);
    var xAxis = dataPointsThree.map(({x}) => x);
    var yAxis = dataPointsThree.map(({y}) => y);
  var myHopeChart = new Chart(ctxThree, {
    type: 'line',
    data: {
        labels: xAxis,
        datasets: [{
            label: 'Live Chart', 
            data: yAxis, 
            fill: false,
            borderColor: '#2196f3', 
            backgroundColor: '#2196f3', 
            borderWidth: 1 
        }]},
    options: {
      responsive: true, 
      maintainAspectRatio: false, 
    },
});
  setTimeout(function(){updateChart(); }, 1000);
}



