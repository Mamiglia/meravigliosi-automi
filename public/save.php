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
            $check_name_query = "SELECT nome FROM automa";
            $result_check = pg_query($dbconn, $check_name_query);
            $check = FALSE;
            $count = 0;
            while($line = pg_fetch_array($result_check, NULL, PGSQL_ASSOC)){
               // echo "$line[nome] \n";
                if ($name == $line['nome']){ //Il nome è gia presente dentro il DB
                    $check = TRUE;
                    break;
                }
                else
                    $check = FALSE; 
            }
            if (!$check)  { //Ps True e False sono invertiti
                $query = "INSERT INTO automa(nome, grafo, immagine)
                        VALUES ($1,$2,$3)"; //Inserisco l'automa dentro il DB
                $result = pg_query_params($dbconn, $query, array($name, $graph, $thumbnail));
                echo "<h1>Salvataggio eseguito correttamente</h1>";
                header("Location: hub.php");
            }
            else {
                echo "<h1>è già presente un automa con questo nome, riprovare</h1>";
                echo "<button onClick=\"window.location.href='http://localhost:8080/?graph=$graph'\">Home Page</button>";
            }

        }

        function stringaRandom($len) { //Da finire di implementare(Manca il collegamento con la casella di testo)
            $caratteri = '0123456789abcdefghilmnjkolpqrstuvzwxyABCDEFGHILMNJKOPQRSTUVZWXY';
            $str = "";
            for ($i = 0; $i < $len; $i++) {
                $str .= $caratteri[rand(0, strlen($caratteri) - 1)];
            }
            return $str;
        }

        function display_confirm($graph, $thumbnail) {
            echo "<h1>Do you want to save this Automa?</h1>";
            echo "<div class=\"thumbnail\">$thumbnail</div>";
            echo "<form action=\"save.php\" method=\"post\">
                <p>Choose a name:</p>
                <input type=\"text\" name=\"name\" placeholder=\"Name...\" required autofocus>
                <input type=\"submit\" value=\"save\">
                <button onClick=\"stringaRandom(5)\">Random</button> 

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
            echo "<h2>ERROR</h2><p>No save data was found</p>";
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