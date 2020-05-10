function buildChart1(chart){
  d3.json("data/nba.json").then((data) => {
    console.log(data);

    // Hold all statistics filtered by Player
    var resultArray = data.filter(object => object.PLAYER===chart); 
    console.log(resultArray);

    // Create chart value variables
    var season = resultArray.map(row => row.SEASON);
    console.log(season);

    var PTS = resultArray.map(row => row.PTS);
    console.log(PTS);

    var AST = resultArray.map(row => row.AST);
    console.log(AST);

    var REB = resultArray.map(row => row.REB);
    console.log(REB);

    var STL = resultArray.map(row => row.STL);
    console.log(STL);

    var salary = resultArray.map(row => row.SALARY);
    console.log(salary);

    var team = resultArray.map(row => row.TEAM);
    console.log(team);

    // Create trace for PTS
    var trace1 = {
      x: season,
      y: PTS,
      name: "POINTS",
      marker: {color: '#FF0000'},
      type: "bar",
    };
    // Create trace for AST
    var trace2 = {
      x: season,
      y: AST,
      name: "ASSISTS",
      marker: {color: '#FF6600)'},
      type: "bar",
    };
    // Create trace for REB
    var trace3 = {
      x: season,
      y: REB,
      name: "REBOUNDS",
      marker: {color: '#FFCC00'},
      type: "bar",
    };
    // Create trace for STL
    var trace4 = {
      x: season,
      y: STL,
      name: "STEALS",
      text: team,
      textposition: 'outside',
      marker: {color: '#FFFF00'},
      type: "bar"
    };
    
    // build line graph for salaries
    trace5 = {
      x: season,
      y: salary,
      name: "SALARY",
      yaxis: 'y2',
      type: "line",
      line: {
        color: '#000099',
        width: 3
      }
    };

    // Combine all traces
    var data =[trace1,trace2,trace3,trace4,trace5];
    
    var layout = {
      barmode: 'stack',
      title: {
        text:'NBA Player Season Totals',
        font: {
          family: "Lucida Console, monospace",
          size: 24,
          color: 'rgb(203,24,29)'
        }
      },
      plot_bgcolor:"#DCDCDC",
      paper_bgcolor:"#F8F8F8",
      xaxis: { 
        title: "SEASON", 
        tickangle: 35,
        showticklabels: true,
        type: 'category',
      },
      margin: {
        l: 50,
        r: 50,
        b: 70,
        t: 70,
        pad: 4
      },
      width: 550,
      height: 425,
      yaxis: { 
        automargin: true,
        name: 'PERFORMANCE TOTALS',
        range: [0, 4500]
      },
      yaxis2: {
        overlaying: 'y1', 
        range: [0, 45000000], 
        showgrid: false, 
        side: 'right', 
        title: 'SALARY',
        automargin: true,
        zeroline: false
      },
      showlegend: true,
      legend: {
        x: 1.1,
        y: 1.07
      }

    };

    Plotly.newPlot('grouped', data, layout);
  });
}

function init(){ //"init" can be any given function name
  // Orient json "name" key with html <div> id "#selDataset"
  var names = d3.select("#selDataset");
  // var names = d3.input("#selDataset");
  
  //Add player names into dropdown menu
  //read .json
  d3.json("data/nba.json").then((data) => {

    console.log(data);
    
    var unique = data.map(row => row.PLAYER);
    console.log(unique);

    // sort in ascending order
    var sort = unique.sort();
    console.log(sort);

    // remove duplicates
    var unique = [...new Set(sort)];
    console.log(unique)

    // For loop to append in dropdown menu
    unique.forEach((name) => {
      names.append("option") //add name value to dropdown menu
      .text(name) //format to text
      .property("value", name); //property value = "name" from beginning of for loop
    });

    var firstName = unique[0]; //select first element from index [0]
    buildChart1(firstName); // call funtion to create chart by [0] index id
    
  });
}

init()

// call buildchart functions again when Player is changed
function optionChanged(names){
  buildChart1(names); //displays new chart 
}
// ======================================================//
// ***CHART2***//
function buildChart2(chart){
  d3.json("data/nba.json").then((data) => {
    console.log(data);

    // Hold all statistics filtered by Player
    var resultArray = data.filter(object => object.PLAYER===chart); 
    console.log(resultArray);

    // Create chart value variables
    var season = resultArray.map(row => row.SEASON);
    console.log(season);

    var PTS = resultArray.map(row => row.PTS);
    console.log(PTS);

    var AST = resultArray.map(row => row.AST);
    console.log(AST);

    var REB = resultArray.map(row => row.REB);
    console.log(REB);

    var STL = resultArray.map(row => row.STL);
    console.log(STL);

    var team = resultArray.map(row => row.TEAM);
    console.log(team);

    var salary = resultArray.map(row => row.SALARY);
    console.log(salary);

    // Create trace for PTS
    var trace1 = {
      x: season,
      y: PTS,
      name: "POINTS",
      marker: {color: '#FF0000'},
      type: "bar",
    };
    // Create trace for AST
    var trace2 = {
      x: season,
      y: AST,
      name: "ASSISTS",
      marker: {color: '#FF6600)'},
      type: "bar",
    };
    // Create trace for REB
    var trace3 = {
      x: season,
      y: REB,
      name: "REBOUNDS",
      marker: {color: '#FFCC00'},
      type: "bar",
    };
    // Create trace for STL
    var trace4 = {
      x: season,
      y: STL,
      name: "STEALS",
      text: team,
      textposition: 'outside',
      marker: {color: '#FFFF00'},
      type: "bar"
    };
    
    // build line graph for salaries
    trace5 = {
      x: season,
      y: salary,
      name: "SALARY",
      yaxis: 'y2',
      type: "line",
      line: {
        color: '#000099',
        width: 3
      }
    };

    // Combine all traces
    var data = [trace1,trace2,trace3,trace4,trace5];
    
    var layout = {
      barmode: 'stack',
      title: {
        text:'NBA Player Season Totals',
        font: {
          family: "Lucida Console, monospace",
          size: 24,
          color: 'rgb(203,24,29)'
        }
      },
      plot_bgcolor:"#DCDCDC",
      paper_bgcolor:"#F8F8F8",
      xaxis: { 
        title: "SEASON", 
        tickangle: 35,
        showticklabels: true,
        type: 'category',
      },
      margin: {
        l: 50,
        r: 50,
        b: 70,
        t: 70,
        pad: 4
      },
      width: 550,
      height: 425,
      yaxis: { 
        automargin: true,
        name: 'PERFORMANCE TOTALS',
        range: [0, 4500],
      },
      yaxis2: {
        overlaying: 'y1', 
        range: [0, 45000000], 
        showgrid: false,
        side: 'right', 
        title: 'SALARY',
        automargin: true,
        zeroline: false
      },
      showlegend: true,
      legend: {
        x: 1.1,
        y: 1.07
      }

    };

    Plotly.newPlot('grouped2', data, layout);
  });
}

function chart2(){ //"init" can be any given function name
  // Orient json "name" key with html <div> id "#selDataset"
  var names = d3.select("#selDataset2");
  // var names = d3.input("#selDataset");
  
  //Add player names into dropdown menu
  //read .json
  d3.json("data/nba.json").then((data) => {

    console.log(data);
    
    var unique = data.map(row => row.PLAYER);
    console.log(unique);

    // sort in ascending order
    var sort = unique.sort();
    console.log(sort);

    // remove duplicates
    var unique = [...new Set(sort)];
    console.log(unique)

    // For loop to append in dropdown menu
    unique.forEach((name) => {
      names.append("option") //add name value to dropdown menu
      .text(name) //format to text
      .property("value", name); //property value = "name" from beginning of for loop
    });

    var firstName = unique[0]; //select first element from index [0]
    buildChart2(firstName); // call funtion to create chart by [0] index id
    
  });
}

chart2()

// call buildchart functions again when Player is changed
function option2Changed(names){
  buildChart2(names); //displays new chart 
}