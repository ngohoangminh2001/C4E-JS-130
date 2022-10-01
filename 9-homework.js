console.log("Exercise 1:");
for (var i = 0; i < 10; i++) console.log(i + 1);
console.log("\n");
console.log("Exercise 2:");
for (var i = 0; i < 10; i++)
    if (i >= 5) console.log(i + 1);
console.log("\n");
console.log("Exercise 3:");
for (var i = 0; i < 10; i++)
    if (i < 5 && i != 0) console.log(i);
console.log("\n");
console.log("Exercise 4:");
for (var i = 0; i < 10; i++)
    if (i == 5) console.log(i);
console.log("\n");
console.log("Exercise 5:");
for (var i = 0; i < 10; i++)
    if (i == 4) continue;
    else console.log(i + 1);
console.log("\n");
console.log("Exercise 6:");
for (var i = 0; i < 10; i++)
    if ((i + 1) % 2 == 0) console.log(i + 1);