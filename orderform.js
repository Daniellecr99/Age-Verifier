
function orderForm() {
    var myName = document.getElementById("ordername").value;
    var addy = document.getElementById("orderaddress").value;
    var order = document.getElementById("ordernumber").value; //$23.50 each
    var order2 = document.getElementById("ordernumber2").value; //$21.50 each
    var order3 = document.getElementById("ordernumber3").value; //$20 each
   document.getElementById('results').innerHTML= (order * 23.50 + order2 * 21.50 + order3 * 20 );
}
orderForm();

//+ " tinctures" + " shipped to " + addy + " for " + myName