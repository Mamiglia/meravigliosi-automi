<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HUB</title>
</head>
<body>
    <!--Aggiungerei un pulsante sul sidemenu: Aggiungi quest'automa al database, cosi da usare una semplice Query qui per "pescarlo"-->
    <!--Poi dovro importarci il css ecc ecc -->
    <!--Qui sotto ci metto uno style temporaneo per """abbellire""" un minimo-->
    <style> 
        h1 {
            color: red;
            font-weight: 800;
            width:100px;
            font-size:10px;
            -webkit-transform: rotate(8deg);
        }
        h1:hover {
            -webkit-transform: rotate(-10deg);
        }
    </style>
    <H1>Benvenuti nell'Hub di Meravigliosi Automi!</H1>
    <H2>Qui potrai condividere i tuo meravigliosi automi con la community di Sapienza</H2>
    <a href="http://localhost:8080">Clicca qui per ritornare all'Home Page</a>
    <!--Tentativo di collegamento ad DB, poi fare la stringify dei grafi per metterli dentro (?)-->
    <?php
        $dbconn = pg_connect("host=localhost port=5432 dbname=automi user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());
        $query = "SELECT nome, grafo FROM automa ORDER BY nome"; //Poi qui farei un ciclo per tutto il DB, cosi da stampare ogni grafo ---- Per ora senza immagine perche bugga tutto
        $result = pg_query($query)
        or die("Errore con la Query: " . pg_last_error());
        //echo "Clicca qui sotto per salvare il tuo automa:";
        //echo "<a href="..">";
        //Qui in qualche modo verrà salvato l'automa in versione: JSON.stringify(automa) ==> in php è json_encode(automa);
        //Il DB lo immagino cosi: |NomeUtente|Grafo.stringify()|Pass(?)|
        echo "<h2>Qui sotto ci sono tutti gli automi condivisi:</h2>"; 
         while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
            echo "<br>";
            echo "<br>";
            /*foreach($line as $col) {
                echo "$col:";
                echo "<br>";
            }*/
            echo "<h3>$line[nome]</h3>";
            $url = urlencode($line["grafo"]);
            echo "<button onClick=\"window.location.href='http://localhost:8080/?graph=$url'\">Carica il grafo</button>";
            echo "<hr>";
        }
        pg_close($dbconn);
    ?>
</body>
</html>