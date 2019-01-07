
  export function Entry(title, entry) {
    this.title = title,
    this.entry = entry
  }

  Entry.prototype.wordCount = function(){
    var wordsInEntry = this.entry.split(" ").length;
    return wordsInEntry;
  }

  Entry.prototype.vowel = function(){
    var vowels = [];
    var newEntry = this.entry.split("");
    for ( var i = 0; i < newEntry.length; i++) {
      if ((newEntry[i] === "a") || (newEntry[i] === "e") || (newEntry[i] === "i") || (newEntry[i] === "o") || (newEntry[i] === "u")) {
        vowels.push(newEntry[i]);
      }
    }
    return vowels.length;
  }

  Entry.prototype.consonant = function(){
    var consonants = [];
    var thisEntry = this.entry.split("");
    for ( var i = 0; i < thisEntry.length; i++) {
      if ((thisEntry[i] !== "a") && (thisEntry[i] !== "e") && (thisEntry[i] !== "i") && (thisEntry[i] !== "o") && (thisEntry[i] !== "u") && (thisEntry[i] !== " ")) {
        consonants.push(thisEntry[i]);
      }
    }
    return consonants.length;
  }
