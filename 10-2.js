var a = [];
for (var i = 10; i < 20; i++) a.push(i + 1);
console.log("a. [" + a + "]");
var b = [];
for (const v of a) b.push(v * 3);
console.log("b. [" + b + "]");
var c = [];
for (const v of a)
{
    if (v > 15) c.push(v * 2); 
}
console.log("c. [" + c + "]");
for (const v of a)
{
    if (v > 11)
    {
        console.log("d. " + (v * 10));
        break;
    }
}
for (var i = 0; i < a.length; i++)
{
    if (a[i] > 13)
    {
        console.log("e. " + a[i + 1]);
        break;
    }
}
var sum = 0;
for (const v of a) sum += v;
console.log("f. " + sum);