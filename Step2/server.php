<?php
  header('Content-Type: application/json');
  require ('database.php');

  /* -- manipolazione del db: aggiungere l'array $lables e sostituire l'array data con i soli int --- */

  $lables = []; // da popolare
  $int = []; // da popolare
  $dataByAgent = $graphs["fatturato_by_agent"]["data"];
  foreach ($dataByAgent as $names => $value) { //ciclo per estrarre i dati..
    $lables[] = $names; //..l'array $lables viene popolato con i soli nomi degli agent..
    $int[] = $value; //..l'array $int viene popolato con i soli numeri degli agent..
  };
  //push $lables = [] into $graphs + sobstitute $data ogetto with array $int
  $graphs["fatturato_by_agent"]["lables"] = $lables;
  $graphs["fatturato_by_agent"]["data"] = $int;

  echo json_encode($graphs);

  /* trasformare $data in array di soli int*/
  /*Ss vogliono creare due grafici utilizzando i dati contenuti dentro al file data.php. Questa volta
  il file contiene non solo i dati ma anche il tipo di grafico atteso.
  Il primo grafico è lo stesso del punto precedente mentre il secondo è un grafico a torta; per
  questo grafico i dati forniti non sono solo i “valori” ma anche le “label”*/

?>
