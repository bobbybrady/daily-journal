/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntries = [
//     {
//         date : '07/10/2019',
//         concepts : 'flexbox',
//         journal : 'Today I learned flexbox, by playing the frog game.',
//         mood: 'Happy'
//     },  

//     {
//         date : '07/11/2019',
//         concepts : 'git',
//         journal : 'Today I practiced git and pushed all of my repositories to GitHub.',
//         mood: 'content'
//     },  

//     {
//         date : '07/12/2019',
//         concepts : 'Javascript Objects' ,
//         journal : 'Practiced creating objects as well as targeting specfic',
//         mood: 'happy'
//     }  
// ]




// console.log(journalEntries)
const toHTML = document.querySelector("#entries")
const makeJournalEntryComponent = (object) => {
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

let allEntries = ""
let fragment = document.createDocumentFragment()
const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        let journal = makeJournalEntryComponent(entry)
        allEntries += journal
        console.log(journal)
    });
    toHTML.innerHTML = allEntries
}

// renderJournalEntries(journalEntries)

const getData = () => {
    fetch("http://localhost:3000/entries")
        .then(entries => entries.json())
        .then(entries => {
            for (const entry of entries) {
                const convertedEntry = makeJournalEntryComponent(entry)
                toHTML.innerHTML += convertedEntry
            }
        })
}

getData()

