<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HUB</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../src/assets/base.css">
    <link rel="stylesheet" type="text/css" href="hub.css">
</head>
<body>
    <!--Aggiungerei un pulsante sul sidemenu: Aggiungi quest'automa al database, cosi da usare una semplice Query qui per "pescarlo"-->
    <!--Poi dovro importarci il css ecc ecc -->
    <!--Qui sotto ci metto uno style temporaneo per """abbellire""" un minimo-->
    <div id="header">
        <div id="title">
            <img src="../src/assets/logo2.png">
            <H1>Benvenuti nell'Hub di Meravigliosi Automi!</H1>
        </div>
    </div>
    <form action="hub.php" method='get'>
        <a href="http://localhost:8080"><span class="material-icons">home</span></a>
        <input type="text" placeholder="Search an automa..." name="query" required>
        <input type="submit" value="go">
    </form>
    <div class="results">
    <?php
        $dbconn = pg_connect("host=localhost port=5432 dbname=automi user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());
        $query = "SELECT nome, grafo, immagine FROM automa ORDER BY nome"; //Poi qui farei un ciclo per tutto il DB, cosi da stampare ogni grafo ---- Per ora senza immagine perche bugga tutto
        $result = pg_query($query)
        or die("Errore con la Query: " . pg_last_error());
        //echo "Clicca qui sotto per salvare il tuo automa:";
        //echo "<a href="..">";
        //Qui in qualche modo verrà salvato l'automa in versione: JSON.stringify(automa) ==> in php è json_encode(automa);
        //Il DB lo immagino cosi: |NomeUtente|Grafo.stringify()|Pass(?)|
         while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
            echo "<div class=\"entry\">";
            /*foreach($line as $col) {
                echo "$col:";
                echo "<br>";
            }*/
            echo "<h3>$line[nome]</h3>";
            echo "$line[immagine]";
            $url = urlencode($line["grafo"]);
            echo "<button onClick=\"window.location.href='http://localhost:8080/?graph=$url'\">edit</button>";
            echo "</div>";
        }
        pg_close($dbconn);
    ?>
    </div>
</body>
</html>