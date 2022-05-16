<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save Automa</title>
</head>
<body>
    <?php
    //import ?? 
        $dbconn = pg_connect("host=localhost port=3001 dbname=Hub user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());

        $graph = $_GET['graph'];
        echo '<p>.$graph.</p>';
        $name;
        $query = "INSERT INTO automi(nome, )
                    VALUES (' ".$name."', '".$graph_endcode."')"; //Inserisco l'automa dentro il DB
        $result = pg_query($dbconn, $query); 
        if (!$result) { //Vediamo se la query esiste
            echo "Errore nel salvataggio del grafo" . pg_last_error();
            header("Location: index.html"); //in caso di errore ritorno indietro
        }
        else { 
            header("Location: hub.php"); //A fine del salvataggio sul DB, questa funzione mi fa il redirect sulla pagina hub.php
        }

    ?>
    <form action="">
        <input type="text">
    </form>

</body>
</html>