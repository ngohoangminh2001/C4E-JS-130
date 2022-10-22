window.onload = () => {
    document.getElementById("submit").onclick = () => {
        var a = Number(document.getElementById("a").value);
        var b = Number(document.getElementById("b").value);
        if (!Number.isInteger(a)) document.getElementById("valid-a").innerHTML = "The number a is not an integer.";
        else document.getElementById("valid-a").innerHTML = "";
        if (a < 2) document.getElementById("valid-a").innerHTML = "The number a cannot be less than 2.";
        else document.getElementById("valid-a").innerHTML = "";
        if (!Number.isInteger(b)) document.getElementById("valid-b").innerHTML = "The number b is not an integer.";
        else document.getElementById("valid-b").innerHTML = "";
        if (b < 2) document.getElementById("valid-b").innerHTML = "The number b cannot be less than 2.";
        else document.getElementById("valid-b").innerHTML = "";
        if (Number.isInteger(a) && Number.isInteger(b) && a >= 2 && b >= 2) {
            var text = "Prime numbers from " + a + " to " + b + ": ";
            var prime = [];
            for (var i = a; i <= b; i++)
                if (primeNumber(i)) prime.push(i);
            for (var i = 0; i < prime.length; i++) {
                text += prime[i];
                if (i != prime.length - 1) text += "; ";
                else text += ".";
            }
            if (prime.length != 0) document.getElementById("result").innerHTML = text;
            else document.getElementById("result").innerHTML = "";
        }
        else document.getElementById("result").innerHTML = "";
    }
    document.getElementById("print").onclick = () => {
        var integer = Number(document.getElementById("integer").value);
        numberOneTriangle(integer);
    }
}
function primeNumber(x) {
    for (var i = 2; i < x; i++)
        if (x % i == 0) return false;
    return true;
}
function numberOneTriangle(integer) {
    if (!Number.isInteger(integer))
        document.getElementById("field").innerHTML = "The number you have entered is not an integer.";
    else if (integer < 1 || integer > 10) document.getElementById("field").innerHTML = "You must enter a number from 1 to 10.";
    else {
        document.getElementById("field").innerHTML = "";
        for (var i = 1; i <= integer; i++) {
            for (var j = 1; j <= i; j++) document.getElementById("field").innerHTML += "*";
            document.getElementById("field").appendChild(document.createElement('br'));
        }
    }
}