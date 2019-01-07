
  export function Entry(title, entry) {
    this.title = title,
    this.entry = entry,
    this.words = 0,
    this.vowels = 0

  }

  Entry.prototype.wordCount = function(){
    var wordsInEntry = this.entry.split(" ");
    for ( var i = 1; i <= wordsInEntry.length; i++ ) {
      this.words += 1;
    }
      return this.words;
  }

  Entry.prototype.vowel = function(){
    // this.vowels += result;
    // var vowels = [];
    // var result = vowels.length;
    var newEntry = this.entry.split("");
    for ( var i = 1; i <= newEntry.length; i++ ){
      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
        this.vowels += 1;
        // vowels.push(i)
      }
    }
    return this.vowels;
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
