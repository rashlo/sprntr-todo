$(document).ready(function() {

  $("#task").keyup(function() {

    var content = $("#task").val();
    var words = content.split(/\s+/); 
    var num_words = words.length; 
    var max_limit = 2;
    if (num_words > max_limit) {
      var lastIndex = content.lastIndexOf(" ");
      $("#task").val(content.substring(0, lastIndex));

      return false;
    }
  });
});
