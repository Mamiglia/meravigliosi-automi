Esame Linguaggi e Tecnologie per il Web 2022.

# Meravigliosi Automi
É una web app progettata per la gestione e valutazione di Automi a Stati Finiti.

### [demo](https://mamiglia.github.io/meravigliosi-automi/)

### Tecnologie usate:
- Vue.js
- Typescript
- PHP
- CSS puro

---
### Files:
`src` contiene tutti i file in Vue e TS, relativi allo stato reattivo della web app nella sua interazione con l'utente, in particolare:
- `App.vue` è la componente principale, che usa poi tutte le altre componenti ed è inoltre il punto di montaggio della libreria `v-network graph` che permette la visualizzazione del grafo. `src/components/` contiene le altre componenti: sidemenu, footabar, editor per le caratteristiche di stati e transizioni e un bottone personalizzato usato ad esempio nella valutazione della stringa.
- In `src/assets/` ci sono:
    - Il file `Automaton.ts` responsabile di tutta la logica relativa alla valutazione dell'automa e alla generazione di stringhe randomiche che vengano accettate.
    - Il CSS principale `base.css` con le palette di colori definite per tutto il sito per light o dark mode (a seconda di prefers-color-scheme).
    - Vari file Typescript con alcune funzioni di utility, ossia:
        - `memory.ts` e `graph.ts`: funzioni per l'uso della memoria nel passaggio in php, la persistenza del grafo alla chiusura del browser, il download e la condivisione;
        - `predefined.ts`: costanti (link, apparenza del grafo, ...);
        - `types.ts`: espansione delle classi node ed edge con campi utili alla gestione dell'automa e altri elementi relativi all'automa;
        - `utilities.ts`: funzioni varie.

In `public` ci sono tutti i file non relativi a TS, in particolare:
- `hub.php` e `hub.css`: pagina dell'hub e l'interazione con il dbms;
- `save.php` e `save.css`: interazione con l'utente al momento del salvataggio di un automa nell'hub;
- `wikia.html` e `wikia.css`: pagina statica che descrive il modello automa e l'utilizzo del sito.
