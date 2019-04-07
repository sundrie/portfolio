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
});
