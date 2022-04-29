x = 0; // Initial amount
y = 0; // % Estimated yield per year [0-100]
z = (y/100)/365; // % Calculation of yield per day based on yield per year
t = 1; // Years [1 - ?]

for (i=1; i<366 * t; i++) {
    
    x = x + (x * z);
    x += 200; // Depositing daily

    if (i == 365 * t) { console.log(x); } // Result
}