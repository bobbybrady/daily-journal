const API = {
    getData() {
        return fetch("http://localhost:8088/entries")
            .then(entries => entries.json())
    },

    saveJournalEntry(entry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    radioFetch(mood) {
        return fetch(`http://localhost:8088/entries?mood=${mood}`)
            .then(entries => entries.json())
    },

    deleteJournalEntry(entryID) {
        return fetch(`http://localhost:8088/entries/${entryID}`,
            {
                method: "DELETE",

            })
            .then(data => data.json())
    },
    getOneEntry(entryID) {
        return fetch(`http://localhost:8088/entries/${entryID}`)
            .then(entry => entry.json())
    },

    editEntry(ID) {
        const updatedObject = {
            date: document.querySelector("#journalDateEdit").value,
            concepts: document.querySelector("#conceptsCoveredEdit").value,
            journal: document.querySelector("#journalEntryEdit").value,
            mood: document.querySelector("#moodEdit").value
        }
        return fetch(`http://localhost:8088/entries/${ID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        }).then(data => data.json())
            .then(() => {
                document.querySelector("#hiddenInput").value = ""
            })
    }
}



export default API
