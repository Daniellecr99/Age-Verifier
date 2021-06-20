
function orderForm() {
    var myName = document.getElementById("ordername").value;
    var addy = document.getElementById("orderaddress").value;
    var order = document.getElementById("ordernumber").value;
    document.write(order + " tinctures" + " shipped to " + addy + " for " + myName);
}

