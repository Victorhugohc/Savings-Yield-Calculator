function Calculation(){

    var t = 1; // Initialize variable
    var u = 0; // Initialize variable
    var v = 0; // Initialize variable
    var w = 0; // Initialize variable
    var x = 0; // Initialize variable

    var t = parseInt(document.getElementById('years').value); // Estimated years of investment [min=1]years
    var u = parseInt(document.getElementById('daily').value); // Daily deposits [min=0]$
    var v = parseInt(document.getElementById('yield').value); // Estimated yield per year [min=0]%
    var w = parseInt(document.getElementById('increase').value); // Annual increase in daily deposits [min=0]%
    var x = parseInt(document.getElementById('start').value); // Initial investment amount [min=0]$

    var y = 1 + (w/100); // Calculation annual increase in daily deposits
    var z = 1 + ((v/100)/365); // Calculation of yield per day based on yield per year

    for (j=0; j < t; j++) {
        for (i=0; i < 365; i++) {
            x = (x * z) + u;
        }
        
        u *= y;
    }
    
    document.getElementById('result').value = x.toFixed(2);

}
