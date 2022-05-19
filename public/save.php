<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save Automa</title>
    <link rel="stylesheet" type="text/css" href="../src/assets/base.css">
    <link rel="stylesheet" type="text/css" href="save.css">
</head>
<body>
    <?php
        function insert_graph($name, $graph, $thumbnail) {
            $dbconn = pg_connect("host=localhost port=5432 dbname=automi user=postgres password=hub")
            or die("Connessione non riuscita: " . pg_last_error());

            // DO THE MAGIC HERE
            $query = "INSERT INTO automa(nome, grafo, immagine)
                    VALUES ($1,$2,$3)"; //Inserisco l'automa dentro il DB
            $result = pg_query_params($dbconn, $query, array($name, $graph, $thumbnail)); 
        }

        function display_confirm($graph, $thumbnail) {
            echo "<h1>Do you want to save this Automa?</h1>";
            echo "<div class=\"thumbnail\">$thumbnail</div>";
            echo "<form action=\"save.php\" method=\"post\">
                <p>Choose a name:</p>
                <input type=\"text\" name=\"name\" placeholder=\"Name...\" required>
                <input type=\"submit\" value=\"save\">

                <input type=\"hidden\" name=\"graph\" value=\"". htmlspecialchars($graph)."\">
                <input type=\"hidden\" name=\"thumbnail\" value=\"". htmlspecialchars($thumbnail)."\">

            </form>";
        }
        
        $name = $_POST['name'];
        $graph = $_POST['graph'];
        $thumbnail = $_POST['thumbnail'];
        if (isset($name)) {
            insert_graph($name, $graph, $thumbnail);
        } else if (isset($graph) and isset($thumbnail)) {
            display_confirm($graph, $thumbnail);
        } else {
            echo "<h1>ERROR</h1><p>No save data was found</p>";
        }


        

        // A cosa servono queste cose?
        // $query2 = "SELECT immagine FROM automa WHERE nome = 'pippo7'";
        // $result = pg_query($query2);
        // while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        //     foreach($line as $col) {
        //         echo "$col";
        //     }
        // }
       /* if (!$result) { //Vediamo se la query esiste
            echo "Errore nel salvataggio del grafo" . pg_last_error();
            header("Location: index.html"); //in caso di errore ritorno indietro
        }
        else { 
            header("Location: hub.php"); //A fine del salvataggio sul DB, questa funzione mi fa il redirect sulla pagina hub.php
        }*/

    ?>
    

</body>
</html>