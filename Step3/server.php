<?php
  header('Content-Type: application/json');
  require ('database.php');

  $fbaDatalables = [];
  $fbaDataInt = [];

  $teDatalables = [];
  $teDataInt = [];

  $dataByAgent = $graphs["fatturato_by_agent"]["data"];
  $dataByTeam = $graphs["team_efficiency"]["data"];

  foreach ($dataByAgent as $names => $value) {
    $fbaDatalables[] = $names;
    $fbaDataInt[] = $value;
  };
  foreach ($dataByTeam as $names => $value) {
    $teDatalables[] = $names;
    $teDataInt[] = $value;
  };

  $graphs["fatturato_by_agent"]["lables"] = $fbaDatalables;
  $graphs["fatturato_by_agent"]["data"] = $fbaDataInt;

  $graphs["team_efficiency"]["lables"] = $teDatalables;
  $graphs["team_efficiency"]["data"] = $teDataInt;


  $declareLevel = $_GET['level'];
  if ($declareLevel === $graphs['fatturato']['access']) {
    echo json_encode($graphs['fatturato']);
  } elseif ($declareLevel === $graphs['fatturato_by_agent']['access']) {
    unset($graphs['team_efficiency']);
    echo json_encode($graphs);
  } elseif ($declareLevel === $graphs['team_efficiency']['access']) {
    echo json_encode($graphs);
  }

?>
