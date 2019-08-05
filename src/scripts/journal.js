import API from "./data.js"
import renderJournal from "./entriesDOM.js"
import toHTML from "./entryComponent.js"

API.getData().then(parsedData => renderJournal(parsedData))


const re = new RegExp(/^[a-z0-9(){}:;., ]+$/i)
const curse = new RegExp(/^(fuck |shit |asshole |bitch |ass )+$/i)

document.querySelector("#submit").addEventListener("click", () => {
    const journalDate = document.querySelector("#journalDate").value
    const journalConcept = document.querySelector("#conceptsCovered").value
    const journalEntry = document.querySelector("#journalEntry").value
    const journalMood = document.querySelector("#mood").value
    if (journalDate === "") {
        window.alert("Not a valid date")
    } else if (re.test(journalConcept) === false || journalConcept.length > 15) {
        window.alert("Not a valid Concept")
    } else if (re.test(journalEntry) === false || journalEntry.length > 500) {
        window.alert("Not a valid entry")
    } else if (curse.test(journalConcept) === true) {
        window.alert("No curse words")
    } else if (curse.test(journalEntry) === true) {
        window.alert("No curse words")
    } else {
    const entry = toHTML.makeJournalObject.makeObject(journalDate, journalConcept, journalEntry, journalMood)
    API.saveJournalEntry(entry).then(() => {
        API.getData().then(paresedData => {
            renderJournal(paresedData)
        })
    })
    }
    
})

