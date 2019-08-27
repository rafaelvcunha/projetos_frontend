var list = [
    {"desc":"arRoz", "amount":"1", "value":"5.40"},
    {"desc":"caRne", "amount":"12", "value":"15.40"},
    {"desc":"boLo", "amount":"3", "value":"8.40"}
];

function getTotal(list){
    var total = 0;
    for( var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead><tr><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Value</th><th scope="col">Action</th></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><th scope="row">'+ formatDesc(list[key].desc) +'</th><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button onclick="setUpdate('+key+');" class="btn btn-default" >Edit</button> | Delete </td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc){
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str;
}

function formatValue(val){
    var str = parseFloat(val).toFixed(2) + "";
    str = "R$ " + str.replace(".", ",");
    return str;
}

function addData(){
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc":desc , "amount":amount , "value":value });
    setList(list);
}

function setUpdate(id){
    var obj = list[id];
    document.getElementById("desc").value = formatDesc(obj.desc);
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
}

function resetForm(){
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
}

setList(list);
console.log(getTotal(list));