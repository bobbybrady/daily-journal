const toHTML = document.querySelector("#entries")

const renderJournal = (entries) => {
    toHTML.innerHTML = ""
    entries.forEach(entry => {
        const convertedEntry = journalHTML.makeJournalEntryComponent(entry)
        toHTML.innerHTML += convertedEntry
        
    });
    }




