var data = "kita, atik, tika, aku, kia, makan, kua";
var kata = data.split(", ");

for (var i = 0; i < kata.length; i++) {

  var word = kata[i];
  var alphabet = word.split("").sort().join("");

  for (var j = 0; j < kata.length; j++) {

    if (i === j) {
      continue;
    }

    var other = kata[j];
    if (alphabet === other.split("").sort().join("")) {
      console.log(" (" +word +','+ other + ")");
    }
  }
}