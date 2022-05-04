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
        include "{ Nodes, Edges } from 'v-network-graph' ";
        $dbconn = pg_connect("host=localhost port=8080 dbname=Hub user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());
        mysql_select_db($database, $dbconn)
        or die("Connessione al database non riuscita");
        $query = 'SELECT Grafo FROM Automi'; //Poi qui farei un ciclo per tutto il DB, cosi da stampare ogni grafo
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
        pg_close($dbconn);
    ?>
</body>
</html>