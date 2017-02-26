$(function(){

  // On sélectionne tous les liens contenant # (ancres)
  $('a[href*="#"]').click(function(){
    // On récupère la cible du lien de l'ancre
    var href = $(this).attr('href');
    // On retire le # inutile
    var validhref = href.replace('#', '');
    scrollToAnchor(validhref);
  });

  // fonction pour faire effet scrolling vers une ancre sur notre page au lieu d'un simple blink(téléportation) vers l'ancre
  function scrollToAnchor(ancre){
    var target = $("div [id="+ ancre +"]");
    $('html,body').animate({scrollTop: target.offset().top},'slow');
  }
  
  // Code en partie repris de : https://www.codeproject.com/Tips/492632/Email-Validation-in-JavaScript
  // Fonction utilisée pour tester les adresses emails
  function checkEmail(email) {
    // regex correspondant au email
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // On teste si une chaine de caractère passe ou non notre filtre si email incorrect alors on retourne faux
    if (!filter.test(email)) {
      return false;
    }
  }

  // Fonction utilisée pour tester les champs vides et espaces en début de chaine
  function checkText(string) {
    // regex pour empêcher espace au début
    var filter = /^[^-\s][\w\s-]+$/;
    // On teste si une chaine de caractère passe ou non notre filtre si chaine de caractères incorrecte alors on retourne faux
    if (!filter.test(string)) {
      return false;
    }
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

    if (checkText(objet) === false) {
      $('#message').show();
      $('#message').css("background", "#d02c2c");
      $('#message').html("Veuillez renseigner un objet");
      formValid = false;
    } else if (checkEmail(email) === false) {
      $('#message').show();
      $('#message').css("background", "#d02c2c");
      $('#message').html("Veuillez entrer une adresse email valide");
      formValid = false;
    } else if (checkText(message) === false) {
      $('#message').show();
      $('#message').css("background", "#d02c2c");
      $('#message').html("Veuillez renseigner un message");
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
