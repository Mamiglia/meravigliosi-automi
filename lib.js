function evaluate(grafo, stringa){
    nodes = Array(radice??);
    return ricorsiveEvaluate(grafo, nodes, stringa); //nodes è l'insieme dei nodi "attivi", inizialmente la sola radice
}

//A ogni ricorsione viene consumato un carattere di stringa e
//la vecchia lista di nodi "attivi" viene completamente sostituita con i nodi raggiunti.
//Se l'automa è a stati finiti la lista conterrà sempre un solo nodo.
//Con un check si può usare quest'ultimo fatto anche per verificare che il grafo in input
//rappresenti effettivamente un automa a stati finiti.
//Ho provato a usare il commento multiriga ma ho fallito :)
function ricorsiveEvaluate(grafo, nodes, stringa){
    if (stringa==""){                               //caso base
        if(nodes contiene uno stato finale??){
            return true;
        }
        return false;
    }
    newNodes = Array();
    for(node of nodes){
        for(edge del nodr??){               //per ogni arco che parte da node
            if(checkTransition(edge)){      //se la transizione è applicabile (checkTransition da definire)
                newNodes.push(vicino??);    //aggiungo il nodo di arrivo di edge a newNodes
            }
        }
    }
    newStringa = stringa.slice(1);
    return ricorsiveEvaluate(grafo, newNodes, newStringa);
}