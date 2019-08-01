const toHTML = document.querySelector("#entries")

const renderJournal = (entries) => {
        toHTML.innerHTML += entries
    }

const clearDOM = () => {
    toHTML.innerHTML = ""
}