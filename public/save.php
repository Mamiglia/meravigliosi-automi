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
        $dbconn = pg_connect("host=localhost port=5432 dbname=automi user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());

        $graph = $_GET['graph'];
        $thumbnail_param = $_GET['thumbnail'];
        $thumbnail = pg_escape_string($thumbnail_param);
       // echo "<p>{$graph}</p>";
       // echo "{$thumbnail}";
       // echo "<p>{$thumbnail_param}</p>";g
        $name = "pippo10"; //Var temporanea 
        $query = "INSERT INTO automa(nome, grafo, immagine)
                    VALUES ($1,$2,$3)"; //Inserisco l'automa dentro il DB
        $result = pg_query_params($dbconn, $query, array($name, $graph, $thumbnail)); 
        $query2 = "SELECT immagine FROM automa WHERE nome = 'pippo7'";
        $result = pg_query($query2);
        while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
            foreach($line as $col) {
                echo "$col";
            }
        }
       /* if (!$result) { //Vediamo se la query esiste
            echo "Errore nel salvataggio del grafo" . pg_last_error();
            header("Location: index.html"); //in caso di errore ritorno indietro
        }
        else { 
            header("Location: hub.php"); //A fine del salvataggio sul DB, questa funzione mi fa il redirect sulla pagina hub.php
        }*/

    ?>
    <form action="">
        <input type="text">
    </form>

</body>
</html>