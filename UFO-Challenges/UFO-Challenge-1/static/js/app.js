// from data.js
var tableData = data;
//appends data from table using keys at column names and adding values to table itself with all of the different
//titles of columns
var table = d3.select("tbody");

function buildtable(data) {
    table.html("");
    data.forEach((filter) => {
        var rowinfo = table.append("tr");
        Object.entries(filter).forEach(([key, value]) => {
          var cell = rowinfo.append("td");
          cell.text(value);
        });
});
}
//add a function for when you click the button 

function buttonclick(){
    d3.event.preventDefault();
    //create variables using the user input
    var userinput = d3.select("#datetime").property("value");
    var newdata = tableData;
    //filter depending on what the user input by date
    if(userinput) {newdata = newdata.filter((row) => row.datetime === userinput)} 
    //build a new table depending on the filtered data - if the user input does not match any of the dates
    //it will return a blank table 
    buildtable(newdata)    
  };
  //uses d3 on the class of the button in the HTML to run this function when the button is clicked on 
  //the webpage
  d3.selectAll("#filter-btn").on("click", buttonclick);

//If it is not filtered, this creates a table with all the data
buildtable(tableData) 

