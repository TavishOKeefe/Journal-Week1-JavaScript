import { Entry } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var inputTitle = $('#title').val();
    var inputEntry = $('#entry').val();

    var output = new Entry(inputTitle, inputEntry);


    $('#journal-entries').append("<li>" + output.title + ": " + output.entry + ". " + output.vowel() + "</li>");

    // $('#journal-entries').text(output.vowel);

  })
})
