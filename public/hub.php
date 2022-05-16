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
    <H1>Benvenuti nell'Hub di Meravigliosi Automi!</H1>
    <H2>Qui potrai condividere i tuo meravigliosi automi con la comunity di Sapieza</H2>
    <!--Tentativo di collegamento ad DB, poi fare la stringify dei grafi per metterli dentro (?)-->
    <?php
        $dbconn = pg_connect("host=localhost port=5432 dbname=automi user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());
        $query = "SELECT nome, grafo, immagine FROM automa ORDER BY nome"; //Poi qui farei un ciclo per tutto il DB, cosi da stampare ogni grafo
        $result = pg_query($query)
        or die("Errore con la Query: " . pg_last_error());
        //echo "Clicca qui sotto per salvare il tuo automa:";
        //echo "<a href="..">";
        //Qui in qualche modo verrà salvato l'automa in versione: JSON.stringify(automa) ==> in php è json_encode(automa);
        //Il DB lo immagino cosi: |NomeUtente|Grafo.stringify()|Pass(?)|
        echo " <h1>Qui sotto ci sono tutti gli automi condivisi:</h1>"; 
                   /* foreach ($ json_decode(automi) as $aut) { ==> json_decode è l equivalente di JSON.parse();
                        echo "$aut";
                    }*/
        while(pg_fetch_result($result, null, PGSQL_ASSOC)){ //While la query restituisce un risultato esistente, allora stampiamo gli elementi del DB
            echo "<tr><td>Automa di: $utente:<br> $aut</td></tr>"; //Da vedere meglio
        }
        pg_close($dbconn);
    ?>
</body>
</html>