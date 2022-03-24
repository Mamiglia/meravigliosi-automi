function evaluate(grafo,stringa){
    nodoIniziale = [nodo, stringa]
    lista = [nodoIniziale];
    while (lista.length!=0) {
        n = lista.pop();
        for (e in grafo.edges){
            adiacenti = []
            if(e.src == n and validaTransizione(e,stringa)){
                adicenti.add(e.dest)
            }
        }
    }

}