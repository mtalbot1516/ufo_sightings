// import data from data.js
const tableData = data;

//Reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data){

    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Append a row to the table body
        Object.values(dataRow).forEach((val)=>{
            // Loop through each field in the dataRow and add
            // each value as a table cell (td)
            let cell = row.append("td");
            cell.text(val);
        });
    });
}