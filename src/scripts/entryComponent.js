const journalHTML = {
    makeJournalEntryComponent (object)  {
        return `
        <article class = "entryLog">
            <section class ="entryLogs">
                <h2>${object.concepts}</h2>
                <h3>${object.date}</h3>
                <p class="flexP">${object.journal}</p>
                <h4>${object.mood}</h4>
            </section>
        </article>`
    
}
}

const makeJournalObject = {
    makeObject (date, concept, entry, mood) {
        const counter1 = document.querySelector("#entries")
        const counter = counter1.length + 1
        return {
            id : counter,
            date: date,
            concepts: concept,
            journal: entry,
            mood: mood
        }
    }
}