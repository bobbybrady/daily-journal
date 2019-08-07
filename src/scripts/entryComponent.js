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
            <button class = "delete" id = "delete--${object.id}">Delete</button>
        </article>`
    
}
}

const makeJournalObject = {
    makeObject (date, concept, entry, mood) {
        return {
            date: date,
            concepts: concept,
            journal: entry,
            mood: mood
        }
    }
}

export default {
    journalHTML, makeJournalObject
}