// Funzione per generare dinamicamente una pagina con header, contenuto e footer
function generatePage(title, content, footerLinkText, footerLinkHref) {
    const body = document.body;

    // Header dinamico
    const header = document.createElement("header");
    header.innerHTML = `<h1>${title}</h1>`;
    body.appendChild(header);

    // Sezione dinamica
    const section = document.createElement("section");
    
    // Titolo della sezione
    const h3 = document.createElement("h3");
    h3.innerText = content.title;
    section.appendChild(h3);

    // Iterazione e aggiunta dei paragrafi
    content.paragraphs.forEach(paragraphText => {
        const p = document.createElement("p");
        p.classList.add("section-paragraph"); // Classe per formattare i paragrafi
        p.textContent = paragraphText;
        section.appendChild(p);
    });

    body.appendChild(section);

    // Footer dinamico
    const footer = document.createElement("footer");
    footer.innerHTML = `<p><a href="${footerLinkHref}">${footerLinkText}</a></p>`;
    body.appendChild(footer);
}
function generaArticoloSection(content) {
    // Creazione della sezione
    const section = document.createElement("section");
    section.className = "section-box"; // Classe agganciata al foglio di stile

    // Aggiunta immagine (se presente)
    if (content.image) {
        const imageDiv = document.createElement("div");
        imageDiv.className = "image-container"; // Classe agganciata al foglio di stile
        const img = document.createElement("img");
        img.src = content.image.src;
        img.alt = content.image.alt;
        img.className = "section-image"; // Classe agganciata al foglio di stile
        imageDiv.appendChild(img);
        section.appendChild(imageDiv);
    }

    // Aggiunta titolo della sezione
    const h3 = document.createElement("h3");
    h3.className = "section-title"; // Classe agganciata al foglio di stile
    h3.textContent = content.title;
    section.appendChild(h3);

    // Iterazione e aggiunta dei paragrafi
    content.paragraphs.forEach(paragraphText => {
        const p = document.createElement("p");
        p.className = "section-paragraph"; // Classe agganciata al foglio di stile
        p.textContent = paragraphText;
        section.appendChild(p);
    });

    // Aggiunta di un blockquote (se presente)
    if (content.quote) {
        const blockquote = document.createElement("blockquote");
        blockquote.className = "section-quote"; // Classe agganciata al foglio di stile

        // Gestione del testo della citazione
        const quoteText = document.createElement("div");
        quoteText.className = "quote-text"; // Classe agganciata al foglio di stile

        // Suddivisione della stringa in paragrafi
        const textLines = content.quote.text.split("\n"); // Divide il testo per ogni nuova riga
        textLines.forEach(line => {
            if (line.trim() !== "") { // Salta righe vuote
                const paragraph = document.createElement("p");
                paragraph.textContent = line.trim(); // Aggiunge la riga come paragrafo
                quoteText.appendChild(paragraph);
            }
        });

        blockquote.appendChild(quoteText);

        // Gestione del footer
        if (content.quote.footer) {
            const footer = document.createElement("div");
            footer.className = "quote-footer"; // Classe agganciata al foglio di stile

            if (content.quote.footerLink) {
                const link = document.createElement("a");
                link.href = content.quote.footerLink;
                link.target = "_blank"; // Apre il link in una nuova scheda
                link.rel = "noopener noreferrer"; // Migliora la sicurezza
                link.innerHTML = `&ndash; <strong>${content.quote.footer}</strong>`;
                footer.appendChild(link);
            } else {
                footer.innerHTML = `&ndash; <strong>${content.quote.footer}</strong>`;
            }

            blockquote.appendChild(footer);
        }

        section.appendChild(blockquote);
    }

    return section;
}

