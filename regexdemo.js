var word =/Great/i;
var regex=/e/g;
var string="Regex is great";

var result = string.match(regex);
var result2 = string.match(word);

console.log(result);
console.log(result2);
