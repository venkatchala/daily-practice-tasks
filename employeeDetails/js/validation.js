var empName = document.getElementById("name");
empName.addEventListener("keyup", (event) => {
    if (empName.value == null || empName.value == "") {
        alert("Please Enter Your Name!....")
        empName.focus();
        return false;
    }
});

var address = document.getElementById("address").value;
var mobileNumber = document.getElementById("mobileNumber").value;
var description = document.getElementById("description").value;