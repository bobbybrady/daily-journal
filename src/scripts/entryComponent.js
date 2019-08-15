const journalHTML = {
    makeJournalEntryComponent (object)  {
        return `
        <article class = "entryLog" id = "section--${object.id}">
            <section class ="entryLogs" >
                <h2>${object.concepts}</h2>
                <h3>${object.date}</h3>
                <p class="flexP">${object.journal}</p>
                <h4>${object.mood.mood}</h4>
            </section>
            <button class = "delete" id = "delete--${object.id}">Delete</button>
            <button class = "edit" id = "edit--${object.id}">Edit</button>
        </article>`
    
}
}

const makeJournalObject = {
    makeObject (date, concept, entry, mood) {
        return {
            date: date,
            concepts: concept,
            journal: entry,
            moodId: parseInt(mood)
        }
    }
}

const makeInputFields = (object) => {
    return `<article class = "entryLogEdit">
    <fieldset class="form--column">
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDateEdit">
        </fieldset>
        <fieldset class="form--column">
            <label for="conceptsCovered">Concepts Covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCoveredEdit" maxlength="20">
        </fieldset>
        <fieldset class="form--column">
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntryEdit" cols="20" rows="5" maxlength="1000"></textarea>
        </fieldset>
        <fieldset class="form--column">
            <label for="mood">Mood for the Day</label>
            <select name="mood" id="moodEdit">
                <option value="1">Happy</option>
                <option value="2">Content</option>
                <option value="3">Frustrated</option>
                <option value="4">Confused</option>
                <option value="5">Overwhelmed</option>
                <option value="6">Bored</option>
                <option value="7">Focused</option>
            </select>
        </fieldset>
    </section>
    <button class = "save" id = "save--${object.id}">Save</button>
</article>`
}

export default {
    journalHTML, makeJournalObject, makeInputFields
}