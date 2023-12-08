function tempconvert(celsius) {
    return (celsius * 9 / 5) + 32;
}
var celsius = 98;
var foreignheight = tempconvert(celsius);
console.log("Temperature in ".concat(celsius, " celsius equals to ").concat(foreignheight, " foreignheight"));
