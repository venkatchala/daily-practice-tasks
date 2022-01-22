function myFunction() {
    var name = document.getElementById("uName").value;
    var age = document.getElementById("uAge").value;
    var address = document.getElementById("uAddress").value;

    if (name != null && age != null && address != null) {
        var personListTable = document.getElementById("personListTable").getElementsByTagName("tbody")[0];
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.innerHTML = name;
        td2.innerHTML = age;
        td3.innerHTML = address;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        personListTable.appendChild(tr);


    }


}