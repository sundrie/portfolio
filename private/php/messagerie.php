<?php

  // Connexion à la BDD
  try {
    $instance = new PDO("mysql:host=localhost;dbname=portfolio", "root", "");
  } catch (Exception $e) {
    die($e->getMessage());
  }

  // Si ajax envoie des données en POST
  if ($_POST) {

    $query = $instance->prepare("INSERT INTO messages (objet, mail, message)
    VALUES (:objet,:mail,:message)");

    $insertSuccess = $query->execute(array(
      "objet" => $_POST['object'],
      "mail" => $_POST['mail'],
      "message" => $_POST['msg']
    ));
  }
