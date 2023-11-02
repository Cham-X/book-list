// selecting element from the ui

const form = document.querySelector(".form");
const bookTitleInput = document.querySelector("#book-title")
const bookAuthorInput = document.querySelector("#book-author")
const bookIsbnInput = document.querySelector("#book-isbn")
const addBookBtn = document.querySelector("#add-book")
const clearBooksBtn = document.querySelector(".clear-btn")
const tableBody = document.querySelector(".book-table")



loadAllEventListeners()

function loadAllEventListeners() {
    //add book to table
    form.addEventListener("submit", addBook);
    // clear all book info
    clearBooksBtn.addEventListener("click", clearBooks)
    // delete book row
    tableBody.addEventListener("click", removeBook)

}

function addBook(e) {
    if (bookTitleInput.value === "" || bookAuthorInput.value === "" || bookIsbnInput.value === "") {
        showAlert("Please Fill In All field", "error")
    }else {
        const tableRow = document.createElement('tr')
        tableRow.className = 'book-row'
    
        tableRow.innerHTML = `
        <td>${bookTitleInput.value}</td>
        <td>${bookAuthorInput.value}</td>
        <td>${bookIsbnInput.value}</td>
        <td class="delete-item">delete</td>
        `

        tableBody.appendChild(tableRow)
    
        clearFields()
        
        showAlert("Book Item Added Successfully!","success")
    
    }

    e.preventDefault()
}



function clearFields() {
    bookAuthorInput.value = "";
    bookIsbnInput.value = "";
    bookTitleInput.value = "";
}

function clearBooks() { 
    tableBody.innerHTML = ""

    showAlert("All books cleared!", "success")

}

function showAlert(message, className) {
    const div = document.createElement("div")
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))
   
    const conatainer = document.querySelector(".container")

    conatainer.insertBefore(div, form)
    
    setTimeout(() => {
        div.remove()
    }, 3000);

}

function removeBook(e) {
    if (e.target.classList.contains("delete-item")) {


        e.target.parentElement.remove()

        showAlert("Book Item Deleted", "success")
    }
}

