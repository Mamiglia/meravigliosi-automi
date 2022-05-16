<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //import ?? 
        $dbconn = pg_connect("host=localhost port=8080 dbname=Hub user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());
        /*****/
        //OPZIONE 1 (Non scorporata) - Con GET mi passo i dati alla pagina php, la quale dovrà gestirli (Protocollo Http)
        $graph = $_GET['graph']; //Poi bisognerà importare i dati in qualche modo; 
        //OPZIONE 2
        $node = $_GET['node'];
        $edge = $_GET['edge'];
        /*****/
        $graph_encode = json_encode($graph); //Dentro l'encode ci andrà la variabile importata 
        $user = $_GET['user'];
        $query = "INSERT INTO automi(utente, graph)
                    VALUES (' ".$user."', '".$graph_endcode."')"; //Inserisco l'automa dentro il DB
        $result = pg_query($dbconn, $query); 
        if (!$result) { //Vediamo se la query esiste
            echo "Errore nel salvataggio del grafo" . pg_last_error();
            header("Location: index.html"); //in caso di errore ritorno indietro
        }
        else { 
            header("Location: hub.php"); //A fine del salvataggio sul DB, questa funzione mi fa il redirect sulla pagina hub.php
        }

    ?>
</body>
</html>