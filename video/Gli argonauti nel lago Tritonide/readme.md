# Gli Argonauti nel lago Tritonide

Sito di appoggio per il nuovo documentario **Fetonte il Distruttore**.

- **Presentazione:** https://fetonte.it/video/Gli%20argonauti%20nel%20lago%20Tritonide/
- **Copione sincronizzato:** https://fetonte.it/video/Gli%20argonauti%20nel%20lago%20Tritonide/copione.html
- **Dati delle scene:** [scene.js](scene.js)
- **Immagini caricate dall'autore:** [immagini/](immagini/)

## Regia concordata

1. Presentazione HTML per la finestra registrata in OBS, formato orizzontale **16:9 / 1920 × 1080**.
2. Copione in una seconda finestra, con sincronizzazione automatica (BroadcastChannel e localStorage) e navigazione avanti/indietro. Il canale e la chiave sono indipendenti da quelli del documentario precedente.
3. **Scene fotografiche o illustrate:** l'immagine occupa tutto il quadro, senza scritte sovrapposte. L'autore carica l'immagine in `immagini/`, poi l'assistente controlla il nome effettivo e inserisce il riferimento in `scene.js`.
4. **Scene di testo, solo quando l'autore le richiede:** l'intera schermata è dedicata al testo, senza immagine laterale, con caratteri molto grandi e dimensione adattata al contenuto; eventuale fonte in basso. Il testo è riportato anche nel copione da leggere, nel medesimo record della scena.
5. Nessuna nuova immagine viene inventata o collegata prima del caricamento. Fonti, licenze e attribuzioni vanno documentate dove necessario.
6. Le parti approvate si aggiungono progressivamente, mantenendo invariati gli URL.

## Struttura delle scene

In `scene.js`, per una scena testuale:

```js
{
  kind: "text",
  title: "",
  text: "Citazione o testo da proiettare",
  source: "Fonte da visualizzare, se richiesta",
  scriptTitle: "Titolo nel copione",
  script: "Testo che il relatore legge"
}
```

Per un'immagine a tutto schermo:

```js
{
  kind: "image",
  src: "immagini/Nome%20esatto%20del%20file.png",
  alt: "Descrizione dell'immagine",
  scriptTitle: "Titolo nel copione",
  script: "Testo che il relatore legge"
}
```

La prima scena è una **copertina testuale provvisoria** con il solo titolo del video, per consentire una verifica immediata. Potrà essere sostituita dalla prima immagine caricata o dal primo brano dettato.

## Comandi

Nella presentazione: **→ / Spazio** avanti; **←** indietro; **Home/End** inizio/fine; **F** schermo intero della pagina (oppure **F11** di Chrome). Nessun pulsante visibile nella finestra registrata. Nel copione sono disponibili anche pulsanti e regolazione della grandezza dei caratteri.

Regole generali: [REGOLE-EDITORIALI-VIDEO.md](https://github.com/Fetonte1960/sviluppo-privato/blob/main/fetonte/REGOLE-EDITORIALI-VIDEO.md).
