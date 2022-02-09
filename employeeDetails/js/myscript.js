
//creating Database name

/*var request = indexedDB.open("EmployeeDetails", 2);
var db;
var addButton = document.getElementById("addBtn");
addButton.addEventListener('click', addDetails);

function addDetails() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var description = document.getElementById("description").value;

    const employeeDetails = { name: name, address: address, mobileNumber: mobileNumber, description: description };
    request.onerror = (event) => {
        console.log(`Error: `);
    };

    request.onsuccess = (event) => {

        db = request.result;
        //let employee = db.createObjectStore("employee", { autoIncrement: true });
        console.log("success.." + db);
    };

    //console.log(employeeDetails);
    request.onupgradeneeded = function (event) {
        db = request.result;
        //create table in dataBase
        let employee = db.createObjectStore("employee", { autoIncrement: true });
        employee.createIndex("name", "name", { unique: false })
        employee.createIndex("address", "address", { unique: false })
        employee.createIndex("mobileNumber", "mobileNUmber", { unique: true })
        employee.createIndex("description", "description", { unique: false })





    };



}*/

var addButton = document.getElementById("addBtn");
addButton.addEventListener('click', addEmployeeDetails);
/*var request = indexedDB.open("EmployeeDetails")


function addDetails() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var description = document.getElementById("description").value;

    const employeeDetails = { name: name, address: address, mobileNumber: mobileNumber, description: description };
    // creating database name


    request.onupgradeneeded = () => {
        let db = request.result;
        let store = db.createObjectStore("employee", { autoIncrement: true });
        store.put({ name: name, address: address, mobileNumber: mobileNumber, description: description });
    }
    request.onsuccess = () => {
        if (request.readyState == "done") {
            console.log("Data successfully created.." + db)
        }

    }
}*/
function addEmployeeDetails() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var description = document.getElementById("description").value;

    //var addEmployee = function (name, address, mobileNumber, description) {

    var employee = JSON.parse(localStorage.getItem('employeesDetail')) || [];
    employee.push({ name: name, address: address, mobileNumber: mobileNumber, description: description });

    localStorage.setItem("employeesDetail", JSON.stringify(employee));


    //}
    // addEmployee(name, address, mobileNumber, description);

}










