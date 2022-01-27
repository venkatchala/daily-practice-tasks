function addFunction() {
    var list = document.getElementById("list").value;
    if (list != "") {
        addList(list);
    } else {
        alert("please Enter To-Do-List");
    }
}
function addList(list) {
    var singleLine = document.createElement("div");
    singleLine.setAttribute("class", "singleLine");
    singleLine.setAttribute("id", "singleLine");
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
    button.setAttribute("id", "removeList");
    button.setAttribute("onclick", "removeList()");
    button.innerHTML = "-";
    document.getElementsByClassName("singleLine")[length - 1].appendChild(button);
    document.getElementById("list").value = "";


}
function removeList() {
    //let element = document.getElementById("addList");
    //var deleteElement = document.getElementById("singleLine");

    let node = document.getElementById("singleLine");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }

}