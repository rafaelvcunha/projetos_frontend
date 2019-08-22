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
console.log(getTotal(list));