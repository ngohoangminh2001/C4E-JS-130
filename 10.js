// for (var i = 100; i >= 1; i--)
//     if (i % 2 == 1) console.log(i);
// console.log("\n");
// var a = Math.random() * 5 + 5;
// a = Math.round(a);
// var n;
// do {
//     n = Number(prompt("Enter n"));
// } while (a !== n) ;
// alert("True");
// console.log(a);
// var number = [10, 12, 1, 5, 9, -1, 7, 8];
// for (var i = 0; i < number.length; i++)
//     console.log("Phần tử thứ " + i + " có giá trị là " + number[i]);
// console.log("\n");
// for (const val of number)
//     console.log("Giá trị: " + val);
// console.log("\n");
// number.forEach(function (value, index) { console.log("Phần tử thứ " + index + " có giá trị là " + value); });
// console.log("\n");
// var sum = 0;
// for (const val of number) sum += val;
// console.log(sum);
// var min = Math.min(...number);
// console.log(min);
// var max = Math.max(...number);
// console.log(max);
// console.log("\n");
// number.push(100, 4000, 30, 10);
// number.pop();
// console.log(number);
// var empty = [1, 2];
// var n = Number(prompt("Enter n"));
// while (n <= 2) n = Number(prompt("Please try again"));
// for (var i = 0; i < n; i++) empty.unshift(0);
// console.log(empty);
var s = '1,2,3,4,5';
var n = 3;
var num = s.split(',');
for (var i = 0; i < num.length; i++) num[i] = Number(num[i]);
// var result = num.map(function(item) {return item ** 2;});
var result = num.filter(item => item >= n);
console.log(result);
console.log("\n");
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);