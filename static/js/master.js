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



  // -*-*-*-*-*-*-*-* On gère l'envoie de message depuis le formulaire ici *-*-*-*-*-*-*-*-
  $(".form-send").click(function(e){

    e.preventDefault();

    // On récupère les infos des différents champs de saisi de notre formulaire
    var objet = $('input[name="objetmsg"]').val();
    var email = $('input[name="email"]').val();
    var message = $('textarea[name="message"]').val();

    // On définit un vérificateur pour détecter si les champs sont vides ou non par défaut on considère le formulaire comme étant bon
    var formValid = true;

    if (objet === "") {
      $('#message').show();
      $('#message').css("background", "#d02c2c");
      $('#message').html("Veuillez renseigner un objet avant de poursuivre");
      formValid = false;
    } else if (email === "") {
      $('#message').show();
      $('#message').css("background", "#d02c2c");
      $('#message').html("Veuillez renseigner votre email avant de poursuivre");
      formValid = false;
    } else if (message === "") {
      $('#message').show();
      $('#message').css("background", "#d02c2c");
      $('#message').html("Veuillez renseigner un message avant de poursuivre");
      formValid = false;
    }


    if (formValid) {
      $.ajax({
        url : 'http://localhost/portfolio/private/php/messagerie.php', // On fait appel au script PHP
        method : 'POST',
        data : {
          object : objet,
          mail : email,
          msg : message
        },
        success : function(data){
          $('#message').show();
          $('#message').html("Message bien envoyé");
          $('#message').css("background", "#4bd059");
          //$('#message').fadeOut(3000);
        }
      });
    }

  });




});
