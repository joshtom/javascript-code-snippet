var str = "var1/var2/var3";

var rest = str.substring(0, str.lastIndexOf("/") + 1);
var last = str.substring(str.lastIndexOf("/") + 1, str.length);
console.log(rest);
console.log(last);
