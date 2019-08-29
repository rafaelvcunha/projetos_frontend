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

    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list){
    var table = '<thead><tr><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Value</th><th scope="col">Action</th></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><th scope="row">'+ formatDesc(list[key].desc) +'</th><td>'+ formatAmount(list[key].amount) +'</td><td>'+ formatValue(list[key].value) +'</td><td><button onclick="setUpdate('+key+');" class="btn btn-default" >Edit</button> <button onclick="deleteData('+key+');" class="btn btn-default" >Delete</button> </td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
    getTotal(list);
    saveListStorage(list);
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

function formatAmount(val){
    return parseInt(val);
}

function addData(){
    if(!validation()){
        return
    }
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

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

function resetForm(){
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style.display = "none";
}

function updateData(){
    if(!validation()){
        return
    }
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc":desc, "amount":amount, "value":value};
    resetForm();
    setList(list);


}


function deleteData(id){

    if( confirm("Quer deletar esse item?") ){
        if( id === 0 ){
            list.shift()
        } else if( id === list.length -1){
            list.pop();
        } else {
            var listAuxIni = list.slice(0,id);
            var listAuxFim = list.slice(id + 1);
            list = listAuxIni.concat(listAuxFim);
        }

        setList(list)
    }

}

function validation(){
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";

    document.getElementById("errors").style.display = "none";
    if (desc === ""){
        errors += '<p>Fill out description</p>';
    }
    if (amount === ""){
        errors += '<p>Fill out amount</p>';
    } else if (amount != parseInt(amount)){
        errors += '<p>Fill out valid amount</p>';
    }
    if (value === ""){
        errors += '<p>Fill out value</p>';
    } else if (value != parseFloat(value)){
        errors += '<p>Fill out valid value</p>';
    }

    if (errors != ""){
        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "rgba(85, 85, 85, 0.3)";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10px";
        document.getElementById("errors").style.borderRadius = "13px";

        document.getElementById("errors").innerHTML = "<h3>Error:</h3>" + errors;
        return 0;
    } else {
        return 1;
    }
}

function deleteList(){
    if(confirm("Delete this list?")){
        list = [];
        setList(list);
    }
}

function saveListStorage(list){
    var jsonStr = JSON.stringify(list);
    localStorage.setItem("list",jsonStr);
}

function initListStorage(){
    var testList = localStorage.getItem("list");
    if(testList){
        list = JSON.parse(testList);
    }
    setList(list);
}

initListStorage();