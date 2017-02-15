$(function(){

// On sélectionne tous les liens contenant # (ancres)

  $('a[href*="#"]').click(function(){
    // On récupère la cible du lien de l'ancre
    var href = $(this).attr('href');
    // On retire le # inutile
    var validhref = href.replace('#', '');
    scrollToAnchor(validhref);
  });

  function scrollToAnchor(ancre){
    var target = $("div [id="+ ancre +"]");
    $('html,body').animate({scrollTop: target.offset().top},'slow');
  }


  $(".form-send").click(function(e){

    e.preventDefault();

    var objet = $('input[name="objetmsg"]').val();
    var email = $('input[name="email"]').val();
    var message = $('textarea[name="message"]').val();

    $.ajax({
      url : 'http://portfolio/private/php/messagerie.php', // On fait appel au script PHP
      method : 'POST',
      data : {
        object : objet,
        mail : email,
        msg : message
      },
      success : function(data){
        $('#message').html("Message bien envoyé");
        //$('#message').fadeOut(3000);
      }
    });

  });




});
