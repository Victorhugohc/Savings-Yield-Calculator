t = 10; // Estimated years of investment [min=1]years
u = 55; // Daily deposits
v = 0; // Estimated yield per year [min=0]%
w = 0; // Annual increase in daily deposits [min=0]%
x = 0; // Initial investment amount [min=0]$
y = 1 + (w/100); // Calculation annual increase (For Loop)
z = 1 + ((v/100)/365); // Calculation of yield per day based on yield per year

for (j=0; j < t; j++) {

    for (i=0; i < 365; i++) {

        x = (x * z) + u;

    }

    u *= y;

}

console.log(x); // Result
