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
buildtable(tableData) 

function clickData() {
    var datetimeInput = d3.select("#datetime").property("value")
    var datetimeFilter = tdata.filter(row => row.datetime === datetimeInput);
    BuildData(datetimeFilter);
    console.log(datetimeFilter);
    console.log(datetimeInput)
};

d3.selectAll("#filter-btn").on("click", clickData)
