/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = {
    date : '07/10/2019',
    concepts : 'flexbox',
    journal : 'Today I learned flexbox, by playing the frog game.',
    mood: 'Happy'
}  

const journalEntryOne = {
    date : '07/11/2019',
    concepts : 'git',
    journal : 'Today I practiced git and pushed all of my repositories to GitHub.',
    mood: 'content'
}  

const journalEntryTwo = {
    date : '07/12/2019',
    concepts : 'Javascript Objects' ,
    journal : 'Practiced creating objects as well as targeting specfic',
    mood: 'happy'
}  

const journalEntries = []

journalEntries.push(journalEntry)
journalEntries.push(journalEntryOne)
journalEntries.push(journalEntryTwo)

console.log(journalEntries)