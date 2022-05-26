# Meravigliosi Automi
É una web app progettata per la gestione e valutazione di Automi a Stati Finiti. Esame Linguaggi e Tecnologie per il Web 2022.

### [demo](https://mamiglia.github.io/meravigliosi-automi/)

### Tecnologie usate:
- Vue.js
- Typescript
- PHP
- CSS puro

---
### Files:
In `src` ci sono tutti i file in Vue e TS, relativi a tutto lo stato reattivo della web app nella sua interazione con l'utente. In particolare `App.vue` é la componente principale, che usa poi tutte le componenti definite in `src/components/`, oltre ad essere il punto di monta della libreria `v-network graph` che permette la visualizzazione del grafo. 

Inoltre in `src/assets/` ci sono:
- Il file CSS di base, con la palette di colori definita per tutto il sito
- Vari file Typescript con alcune funzioni di utility
- Il file `Automaton.ts` responsabile di tutta la logica relativa alla valutazione dell'automa

Mentre in `public` ci sono tutti i file non relativi a TS, tipo `hub` e `save` in PHP e `wikia.html` pagina statica.
