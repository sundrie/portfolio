$(function(){

  function scrollToAnchor(aid){
      var anchorTarget = $("#"+ aid +"");
      $('html,body').animate({scrollTop: anchorTarget.offset().top},'slow');
  }

  $("#contact").click(function() {
     scrollToAnchor('contact');
  });

});
