// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify("Skippy"));          // "##ippy"
console.log(maskify("123"));             // "123"
