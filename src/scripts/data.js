const API = {
    getData () {
        return fetch("http://localhost:8088/entries")
            .then(entries => entries.json())
    },

    saveJournalEntry (entry) {
       return fetch("http://localhost:8088/entries", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }) 
}

}

export default API
