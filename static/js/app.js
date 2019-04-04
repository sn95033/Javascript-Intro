// from data.js
var tableData = data;

// YOUR CODE HERE!
// Access the variable tbody using d3 shown at the bottom of the index.html

let tbody = d3.select("tbody");

// Items needed
// 1. Build a table
// 2. Click handler


// 1. Create a function to build the table
// pass in the the variable name data

function buildTable(data){

    // initialize the table to clear out the existing data

    tbody.html("");

    data.forEach((dataRow) => {
        //console.table(dataRow);
        let row = tbody.append("tr");

        // Use a function to get all the values from the table
        // Check in the console that you are looping through all thousand values or so
        //  console.table(Object.values(dataRow));

        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });

    })

}

// Make sure to call the functions so they show up in the html



// Click handler - when clicked (event) it calls a function called handleClick
function handleClick(){         // Function declaration

        d3.event.preventDefault();  // prevents page from refreshing 

        let date = d3.select('#datetime').property('value');
        let filterData = tableData;

        let state = d3.select('#state').property('value');

        //Check to see if there is a date entered, and filter based on it

        if(date) {
                filterData = filterData.filter((row) => row.datetime === date);
        }

        if(state) {
                filterData = filterData.filter((row) => row.state === state);
        }

        buildTable(filterData);
    }

// Go inspect the html to select the button name,  it turns out it is called filter-btn
// Use the syntax below to identify that button,  using a # 


d3.selectAll('#filter-btn').on('click', handleClick);


buildTable(tableData);



