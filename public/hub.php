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
    function display_result($result) {
        while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
            echo "<div class=\"entry\">";
            echo "<h3>$line[nome]</h3>";
            echo "$line[immagine]";
            $url = urlencode($line["grafo"]);
            echo "<button onClick=\"window.location.href='http://localhost:8080/?graph=$url'\">edit</button>";
            echo "</div>";
        }
    }

    function query($query) {
        $dbconn = pg_connect("host=localhost port=5432 dbname=automi user=postgres password=hub")
        or die("Connessione non riuscita: " . pg_last_error());
        $result = pg_query($query)
        or die("Errore con la Query: " . pg_last_error());

        pg_close($dbconn);
        return $result;
    }
    
    $query_param = $_GET['query']; //contiente il termine da cercare
    $result;
    if (isset($query_param)){
        $query = "BOH"; // Da impostare la query LIKE con parametri safe!!
        $result = query($query);
    } else {
        $result = query("SELECT nome, grafo, immagine FROM automa ORDER BY nome LIMIT 10");
    }

    display_result($result);

    ?>
    </div>
</body>
</html>