function addFunction() {
    var list = document.getElementById("list").value;
    if (list != "") {
        addList(list);
    } else {
        alert("please Enter To-Do-List");
    }
}
function addList(list) {
    counter = counter + 1;
    var singleLine = document.createElement("div");
    singleLine.setAttribute("class", "singleLine");
    singleLine.setAttribute("id", counter);
    document.getElementById('addList').appendChild(singleLine)
    var length = document.getElementById('addList').childNodes.length;
    var checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkBox');
    document.getElementsByClassName('singleLine')[length - 1].appendChild(checkBox);
    var para = document.createElement("p");
    para.setAttribute("class", "listValue");
    para.innerHTML = list;
    document.getElementsByClassName('singleLine')[length - 1].appendChild(para);
    var button = document.createElement("button");
    button.setAttribute("class", "removeList");
    button.setAttribute("onclick", "removeList(" + counter + ")");
    button.innerHTML = "-";
    document.getElementsByClassName("singleLine")[length - 1].appendChild(button);
    document.getElementById("list").value = "";


}
var counter = 0;
function removeList(counter) {
    document.getElementById(counter).remove();
}