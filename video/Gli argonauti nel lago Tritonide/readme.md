# Gli Argonauti nel lago Tritonide — regole editoriali e tecniche

**Versione locale:** 1.1 — 23 novembre 2026  
**Stato:** istruzioni operative per la realizzazione e l'aggiornamento del sito di appoggio del documentario **Fetonte il Distruttore**.  
**Questo README è il riferimento da rileggere prima di modificare i file del video.** Non sostituisce le [regole generali del progetto](https://github.com/Fetonte1960/sviluppo-privato/blob/main/fetonte/REGOLE-EDITORIALI-VIDEO.md): specifica le scelte per questo episodio e prevale sulle impostazioni generiche quando esse descrivono una presentazione di prova diversa.

## 1. Indirizzi e file da conservare

- **Presentazione pubblica (finestra OBS):** https://fetonte.it/video/Gli%20argonauti%20nel%20lago%20Tritonide/
- **Copione pubblico (finestra del relatore):** https://fetonte.it/video/Gli%20argonauti%20nel%20lago%20Tritonide/copione.html
- **Presentazione:** [index.html](index.html)
- **Archivio ordinato delle scene e dei testi:** [scene.js](scene.js)
- **Copione sincronizzato:** [copione.html](copione.html)
- **File grafici:** nella presente cartella del video e, se necessario, nella sottocartella [immagini/](immagini/).

**Non cambiare gli URL** e non modificare la presentazione precedente in `/presentazioni/`. Il documentario ha il suo spazio indipendente in `video/Gli argonauti nel lago Tritonide/`.

## 2. Regia e modalità di registrazione

- Impostazione orizzontale **16:9**, obiettivo **1920 × 1080 px**; registrazione iniziale OBS 30 fps.
- In Chrome si aprono **due finestre dello stesso sito e profilo del browser**: presentazione e copione.
- **OBS registra soltanto la presentazione**; la seconda finestra contiene il testo pronunciato dal relatore con la propria voce.
- Ogni scena della presentazione corrisponde **a una sezione del copione**; avanzando nella presentazione si aggiorna il testo da leggere e viceversa.
- Sincronizzare tramite `BroadcastChannel` con integrazione di `localStorage`. Il canale di questo video deve restare separato dagli altri documentari.
- Comandi della presentazione: **→ / Spazio** avanti, **←** indietro, **Home / End** prima/ultima, **F** fullscreen del documento, **F11** fullscreen del browser.
- **Niente pulsanti di navigazione visibili nella finestra registrata**. Nel copione possono esserci pulsanti per navigazione e dimensione del carattere.

## 3. Due tipi di scena: niente composizioni affiancate

### A — Scena illustrata (normale)

- Mostrare **una sola immagine a tutto schermo**; nessun testo, didascalia, citazione o titolo sovrapposto durante la narrazione, salvo richiesta specifica.
- Utilizzare preferibilmente immagini orizzontali 16:9; `object-fit: cover` per le illustrazioni destinate a riempire il quadro. Per mappe, iscrizioni e reperti non tagliare dati rilevanti: usare `contain` o un adattamento appropriato.
- **L'autore carica personalmente le immagini su GitHub**; l'assistente verifica nome, posizione e integrità, poi collega il file alla scena. Non inventare immagini, nomi o URL.

### B — Scena di solo testo (su richiesta espressa)

- Quando l'autore richiede di **visualizzare anche il testo**, generare una pagina in cui **il testo sia l'unico contenuto dominante**, senza alcuna immagine contestuale a sinistra, a destra o sullo sfondo.
- Impaginazione di qualità editoriale, sfondo blu notte, testo color avorio e accenti oro discreti, ampi margini di sicurezza.
- **Caratteri grandi, adattati automaticamente per utilizzare il più possibile l'intera superficie utile del 16:9**; il testo non deve essere troncato né uscire dai bordi. Se troppo lungo per essere leggibile, suddividerlo in più scene di testo.
- La dimensione del testo visibile nella presentazione e quella del copione sono indipendenti; il copione può contenere spiegazioni più lunghe.
- Se si tratta di una citazione, verificare l'originale; mostrare l'attribuzione bibliografica discreta nella zona inferiore quando appropriato. Mai aggiungere automaticamente un'immagine laterale: l'eventuale modello delle vecchie slide con citazione e figura **non si usa in questo video**.
- La copertina testuale iniziale è **provvisoria**: sarà sostituita o mantenuta secondo le scelte editoriali dell'autore.

## 4. Ordine numerico delle immagini: regola vincolante

**L'autore decide l'ordine delle immagini assegnando a ogni file un numero iniziale seguito da un trattino.** Esempi:

- `1-Atlantide nel Sahara_ il lago Tritonide.png`
- `2-La laguna funeraria di Giza.png`
- `3-Scavi funerari alla luce dorata di Giza.png`
- `4-La Grande Piramide in costruzione.png`
- Futuri caricamenti: `5-...`, `6-...`, `7-...` e così via.

**Ordinare per valore numerico**, non alfabetico: `2-...` precede `10-...`. Non dipendere dall'ordine di upload o dalla data del commit. Non rinominare né rinumerare i file senza indicazione dell'autore. Segnalare numeri duplicati o mancanti, ma non creare o sostituire contenuti per riempire eventuali vuoti.

Il posizionamento di **scene testuali tra le immagini** si decide secondo le istruzioni dell'autore, mantenendo invariato l'ordine relativo delle immagini numerate.

**Importante sulla posizione dei file:** i quattro nomi sopra sono stati rilevati **nella cartella principale del video**, non in `immagini/`. Usare dunque il percorso relativo corretto (ad esempio `1-Atlantide%20nel%20Sahara_%20il%20lago%20Tritonide.png`). Per i futuri upload verificare ogni volta la cartella effettiva; non presumere che il file sia stato inserito in `immagini/`.

**Controllo di integrità obbligatorio:** alla verifica del 23 novembre 2026 i quattro file numerati risultavano file segnaposto di **2 byte ciascuno**, non immagini PNG valide. **Non considerarli immagini caricate** e non dichiarare le scene illustrate funzionanti finché l'autore non avrà caricato i veri file binari. Controllare almeno dimensione/contenuto effettivo e corrispondenza dell'URL prima di pubblicare il riferimento.

La numerazione **non importa immagini automaticamente** nell'attuale codice del sito: l'assistente aggiorna esplicitamente `scene.js`, conservando l'ordine. Un eventuale automatismo futuro deve rispettare le stesse regole.

## 5. Comportamento quando arriva un nuovo brano o una nuova immagine

1. **Rileggere questo README** e lo stato aggiornato di `scene.js`, `index.html`, `copione.html`.
2. Se l'autore **detta un brano**, migliorarne ortografia e fluidità **senza alterarne il significato**; salvare il testo completo nel copione tramite `scene.js`. Distinguere testo delle fonti e interpretazione del progetto.
3. Se l'autore **carica immagini**, elencare i file realmente presenti, controllarne l'integrità e ordinarli per il prefisso numerico.
4. **Associare una scena al relativo brano**; se mancano informazioni per un copione definitivo, non inventare la narrazione. Per una scena senza testo approvato usare un segnaposto esplicito solo nella finestra del copione.
5. Se l'autore **richiede una scena testuale**, inserirla dove indicato in sequenza, adattarne le dimensioni e mettere l'eventuale testo da pronunciare anche nel copione. **Mai sostituire un'immagine con una scena testuale senza richiesta**.
6. Aggiornare `scene.js` ed eventualmente `index.html` o `copione.html` se occorrono cambiamenti tecnici; **conservare le parti già approvate**.
7. Verificare dopo ogni aggiornamento la corrispondenza fra le scene e i brani, i riferimenti dei file, la sincronizzazione, la leggibilità a 1080p e gli URL invariati. Dichiarare ciò che è stato verificato su GitHub e distinguere da un eventuale collaudo visivo non eseguito sul sito pubblico.

## 6. Archivio delle scene: contratto dei dati

**Un oggetto di `window.FETONTE_ARGONAUTI_SCENE` = una scena nella presentazione e una sezione nel copione.**

Scena con immagine:

```js
{
  kind: "image",
  src: "1-Atlantide%20nel%20Sahara_%20il%20lago%20Tritonide.png",
  alt: "Descrizione dell'immagine",
  scriptTitle: "Titolo del brano",
  script: "Testo approvato da leggere"
}
```

Scena di solo testo:

```js
{
  kind: "text",
  title: "",
  text: "Testo grande da visualizzare",
  source: "Riferimento bibliografico, se necessario",
  scriptTitle: "Titolo del brano",
  script: "Testo approvato da leggere"
}
```

**Non scrivere manualmente due copioni discordanti:** `scene.js` alimenta entrambe le pagine. Le scene sono aggiunte nella posizione concordata dall'autore. Evitare cambiamenti distruttivi nel codice e nei contenuti approvati.

## 7. Fonti, immagini e pubblicazione

- Per affermazioni storiche, geografiche o archeologiche distinguere **citazione originale**, **riscontro esterno**, **interpretazione dell'autore** e **ipotesi ancora aperta**.
- Se si usano immagini documentarie da Wikipedia/Wikimedia Commons, controllare la scheda specifica: autore, URL, licenza, attribuzione, modifiche e compatibilità col riuso su YouTube e Fetonte.it. Non attribuire genericamente a Wikipedia.
- Le immagini generate sono **ricostruzioni illustrative**, non reperti o fotografie storiche.
- Il copione sul sito è **pubblico**: non inserirvi appunti riservati, credenziali o dati sensibili.
- Il flusso è statico su GitHub Pages: **nessun server aggiuntivo** è previsto per la presentazione e il copione.
- Conservare la cronologia delle decisioni nel README o nel diario di ricerca quando si rivedono regole importanti.

## 8. Stato iniziale registrato

- Sito di appoggio e copione creati nel repository pubblico `Fetonte1960/Fetonte`.
- `scene.js` contiene attualmente soltanto **la copertina testuale provvisoria**.
- Quattro file numerati presenti nella directory principale del video: **non ancora immagini valide** alla verifica del 23 novembre 2026.
- Prossima attività: sostituire i segnaposto con i file PNG reali, associare le immagini alle scene in ordine 1–4, quindi aggiungere i brani dettati e le eventuali scene di testo richieste.

---
**Regole comuni del progetto:** [fetonte/REGOLE-EDITORIALI-VIDEO.md](https://github.com/Fetonte1960/sviluppo-privato/blob/main/fetonte/REGOLE-EDITORIALI-VIDEO.md).  
**Regola di precedenza:** questo README disciplina **la produzione di questo specifico sito di appoggio**, senza modificare automaticamente le regole di altri video.
