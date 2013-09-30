$(function(){
  $('#style_editor input:nth-child(4)').click(function(e) {
    e.preventDefault();

    var selector = $('#style_editor input:nth-child(1)').val();
    var property = $('#style_editor input:nth-child(2)').val();
    var value = $('#style_editor input:nth-child(3)').val();
    
    $(selector).css(property, value);
  });
});
