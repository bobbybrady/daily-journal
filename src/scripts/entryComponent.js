const journalHTML = {
    makeJournalEntryComponent (object)  {
        return `
        <article class = "entryLog">
        <fieldset class ="entryLogs">
        <h2>${object.concepts}</h2>
        <h3>${object.date}</h3>
        <p>${object.journal}</p>
        <h4>${object.mood}</h4>
        </fieldset>
        </article>`
    
}
}