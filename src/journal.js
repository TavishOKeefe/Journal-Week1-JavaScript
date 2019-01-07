
  export function Entry(title, entry) {
    this.title = title,
    this.entry = entry
    // this.words = 0,
    // this.vowels = 0

  }

  Entry.prototype.wordCount = function(){
    var wordsInEntry = this.entry.split(" ").length;
    return wordsInEntry;
  }

  Entry.prototype.vowel = function(){
    var vowels = [];
    var result = vowels.length;
    var newEntry = this.entry.split("");
    console.log(newEntry);
    newEntry.forEach(function(element) {
      // if ((element === "a") || (element === "e") || (element === "i") || (element === "o") || (element === "u")) {
        vowels.push(element);
      // } else {
      //   return "There are no vowels in your entry.";
      // }
    })
    return result;
  }

  Entry.prototype.consonant = function(){
    var consonants = [];
    for ( var i = 1; i <= this.entry.toLowerCase(); i++ ){
      if (i !== "a" || i !== "e" || i !== "i" || i !== "o" || i !== "u"){
        consonants.push(i)
      }
    }
    return consonants.length;
  }
