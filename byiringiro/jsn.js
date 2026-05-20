<script>

function convertCurrency() {

    var amount = document.getElementById("amount").value;
    var from = document.getElementById("fromCurrency").value;
    var to = document.getElementById("toCurrency").value;

    // Currency values
    var rates = {
        USD: 1,
        EUR: 0.88,
        GBP: 0.75,
        INR: 83.5,
        RWF: 1420
    };

    if (amount == "") {
        alert("Enter amount");
        return;
    }

    var result = amount * rates[to] / rates[from];

    document.getElementById("result").innerHTML =
        amount + " " + from + " = " +
        result.toFixed(2) + " " + to;
}

</script>