const toHTML = document.querySelector("#entries")
const render = {
    renderJournal (entries) {
        toHTML.innerHTML += entries
}
}