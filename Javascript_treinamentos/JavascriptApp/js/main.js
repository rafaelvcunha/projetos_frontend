var list = [
    {"desc":"Arroz", "amount":"1", "value":"5.40"},
    {"desc":"Carne", "amount":"12", "value":"15.40"},
    {"desc":"Bolo", "amount":"3", "value":"8.40"}
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
        table += '<tr><th scope="row">'+ list[key].desc +'</th><td>'+ list[key].amount +'</td><td>'+ list[key].value+'</td><td> Edit | Delete </td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

setList(list);

console.log(getTotal(list));