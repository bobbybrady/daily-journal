const API = {
    getData () {
        return fetch("http://localhost:8088/entries")
            .then(entries => entries.json())
    }
}