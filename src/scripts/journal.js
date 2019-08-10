import API from "./data.js"
import renderJournal from "./entriesDOM.js"
import toHTML from "./entryComponent.js"

let storageArray = []
API.getData().then(parsedData =>  {
    // sessionStorage.setItem("journalEntriesObject", JSON.stringify(parsedData))
    renderJournal(parsedData)
    storageArray.push(parsedData)
})


// let data = JSON.parse(sessionStorage.getItem("journalEntriesObject"))
const re = new RegExp(/^[a-z0-9(){}:;., ]+$/i)
const curse = new RegExp(/^fuck|shit|asshole|bitch|ass/i)
let hiddenInput = document.querySelector("#hiddenInput")
let journalDate = document.querySelector("#journalDate")
let journalConcept = document.querySelector("#conceptsCovered")
let journalEntry = document.querySelector("#journalEntry")
let journalMood = document.querySelector("#mood")
document.querySelector("#submit").addEventListener("click", () => {
    if (hiddenInput.value !== "") {
        API.editEntry(hiddenInput.value).then(() => {
            API.getData().then(parsedData => {
                storageArray = []
                renderJournal(parsedData)
                storageArray.push(parsedData)
                
            })
        })
    } else {
    if (journalDate === "") {
        window.alert("Not a valid date")
    } else if (re.test(journalConcept.value) === false) {
        window.alert("Not a valid Concept")
    } else if (re.test(journalEntry.value) === false) {
        window.alert("Not a valid entry")
    } else if (curse.test(journalConcept.value) === true) {
        window.alert("No curse words")
    } else if (curse.test(journalEntry.value) === true) {
        window.alert("No curse words")
    } else {
        const entry = toHTML.makeJournalObject.makeObject(journalDate.value, journalConcept.value, journalEntry.value, journalMood.value)
        API.saveJournalEntry(entry).then(() => {
            API.getData().then(parsedData => {
                storageArray = []
                renderJournal(parsedData)
                storageArray.push(parsedData)
                
            })
        })
    }
}
    journalConcept.value = ""
    journalDate.value = ""
    journalEntry.value = ""
    journalMood.value = ""

})

const radio = document.querySelector("#moodContainer")

radio.addEventListener("click", (event) => {
    if (event.target.name === "radio") {
        const mood = event.target.value
        if (mood === "Display All") {
            renderJournal(storageArray[0])
        } else {
        const filteredItem = storageArray[0].filter(item => item.mood === mood)
        renderJournal(filteredItem)
        }
    }
    
})

const deleteButton = document.querySelector("#entries")

deleteButton.addEventListener("click", (event) =>{
    if (event.target.id.startsWith("delete")) {
        const ID = event.target.id.split("--")[1]
        API.deleteJournalEntry(ID)
        .then(API.getData)
        .then(renderJournal)
        const deleteFromArray = storageArray[0].indexOf(ID)
        storageArray[0].splice(deleteFromArray, 1)
    }
})


deleteButton.addEventListener("click", () => {
    if (event.target.id.startsWith("edit")) {
        const ID = event.target.id.split("--")[1]
        API.getOneEntry(ID).then(parsedEntry => {
            journalDate.value = parsedEntry.date
            journalConcept.value = parsedEntry.concepts
            journalEntry.value = parsedEntry.journal
            journalMood.value = parsedEntry.mood
            hiddenInput.value = parsedEntry.id
        })
    }
})

