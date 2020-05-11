<?php
  header('Content-Type: application/json');
  require ('database.php');
  echo json_encode($data);
?>
