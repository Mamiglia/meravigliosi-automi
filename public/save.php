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
        $dbconn = pg_connect("host=localhost port=8080 dbname=Hub user=postgres password=hub");
        $graph_encode = json_encode(); //Dentro l'encode ci andrà la variabile importata 
        $graph = $_POST['graph']; //Poi bisognerà importare i dati in qualche modo; 
        $user = $_POST['user'];
        $query = "SELECT graph FROM automi";
        $result = pg_query($dbconn, $query); 
        if ($tuple=pg_fetch_result($result, null, PGSQL_ASSOC)) { //Vediamo se la query esiste
            echo "Errore nel salvataggio del grafo";
            header("Location: index.html");
        }
        else { 
            header("Location: hub.php"); //A fine del salvataggio sul DB, questa funzione mi fa il redirect sulla pagina hub.php
        }

    ?>
</body>
</html>