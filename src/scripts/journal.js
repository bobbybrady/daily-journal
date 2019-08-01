API.getData().then(entries => {
    for (const entry of entries) {
        const convertedEntry = journalHTML.makeJournalEntryComponent(entry)
        render.renderJournal(convertedEntry)
    }
})