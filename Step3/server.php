<?php
  header('Content-Type: application/json');
  require ('database.php');

  /* -- manipolazione del db: aggiungere l'array $lables e sostituire l'array data con i soli int --- */

  $fbaDatalables = []; // da popolare
  $fbaDataInt = []; // da popolare

  $teDatalables = []; // da popolare
  $teDataInt = []; // da popolare

  $dataByAgent = $graphs["fatturato_by_agent"]["data"];
  $dataByTeam = $graphs["team_efficiency"]["data"];

  foreach ($dataByAgent as $names => $value) { //ciclo per estrarre i dati..
    $fbaDatalables[] = $names; //..l'array $lables viene popolato con i soli nomi degli agent..
    $fbaDataInt[] = $value; //..l'array $int viene popolato con i soli numeri degli agent..
  };
  foreach ($dataByTeam as $names => $value) { //ciclo per estrarre i dati..
    $teDatalables[] = $names; //..l'array $lables viene popolato con i soli nome del team..
    $teDataInt[] = $value; //..l'array $int viene popolato con i soli numeri del team..
  };
  
  $graphs["fatturato_by_agent"]["lables"] = $fbaDatalables;
  $graphs["fatturato_by_agent"]["data"] = $fbaDataInt;

  $graphs["team_efficiency"]["lables"] = $teDatalables;
  $graphs["team_efficiency"]["data"] = $teDataInt;

  //var_dump($graphs);
  echo json_encode($graphs);

  /* Un nuovo grafico a linea che mostra l’andamento di efficienza dei 3 team mese per
mese, una linea per ogni team*/

?>
