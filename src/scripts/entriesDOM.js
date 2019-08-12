import factory from "./entryComponent.js"

const toHTML = document.querySelector("#entries")

const renderJournal = (entries) => {
    toHTML.innerHTML = ""
    entries.forEach(entry => {
        const convertedEntry = factory.journalHTML.makeJournalEntryComponent(entry)
        toHTML.innerHTML += convertedEntry

    });
}



export default renderJournal


