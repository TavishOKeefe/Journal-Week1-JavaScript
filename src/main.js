import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var inputTitle = $('#title').val();
    var inputEntry = $('#entry').val();

    var output = new Entry(inputTitle, inputEntry);


    $('#journal-entries').append("<li>" + output.title + ": " + output.entry + "</li>");

    $('#words-entries').text(output.wordCount());
    $('#vowels-entries').text(output.vowel());
    $('#consonants-entries').text(output.consonant());

  })
})
