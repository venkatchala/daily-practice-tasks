//getAll Employees
function getAllEmployees() {
    var employeeDetail = JSON.parse(localStorage.getItem("employeesDetail"));
    var length = employeeDetail.length;
    var i = 0;
    while (i < length) {
        var empDetail = employeeDetail[i];
        var table = document.getElementById("list-table");
        var tableRow = document.createElement("tr");
        var tableData1 = document.createElement("td");
        var tableData2 = document.createElement("td");
        var tableData3 = document.createElement("td");
        var tableData4 = document.createElement("td");
        tableData1.innerHTML = empDetail.name;
        tableRow.appendChild(tableData1);
        tableData2.innerHTML = empDetail.address;
        tableRow.appendChild(tableData2);
        tableData3.innerHTML = empDetail.mobileNumber;
        tableRow.appendChild(tableData3);
        tableData4.innerHTML = empDetail.description;
        tableRow.appendChild(tableData4);
        table.appendChild(tableRow);
        i++;
    }

}
