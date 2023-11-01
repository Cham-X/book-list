// selecting element from the ui

const form = document.querySelector(".form");
const bookTitleInput = document.querySelector("#book-title")
const bookAuthorInput = document.querySelector("#book-author")
const bookIsbnInput = document.querySelector("#book-isbn")
const addBookBtn = document.querySelector("#add-book")
const clearBooksBtn = document.querySelector(".clear-btn")
const filterBooksInput = document.querySelector("#search-book")
const list = document.querySelector(".book-table")


loadAllEventListeners()

function loadAllEventListeners() {
    //add book to table
    form.addEventListener("submit", addBook);
    // clear all book info
    clearBooksBtn.addEventListener("click", clearBooks)
    // delete book row
    list.addEventListener("click", removeBook)
    // filter item
    filterBooksInput.addEventListener("keyup", filterBook)
}

function addBook(e) {
    if (bookTitleInput.value === "" || bookAuthorInput.value === "" || bookIsbnInput.value === "") {
        showAlert("Please Fill In All field", "error")
    } else {
        const row = document.createElement('tr')
        row.className = 'book-row'

        row.innerHTML = `
        <td>${bookTitleInput.value}</td>
        <td>${bookAuthorInput.value}</td>
        <td>${bookIsbnInput.value}</td>
        <td class="delete-item">delete</td>
        `

        list.appendChild(row);

        showAlert("Book Added sucessfully!", "success")

        clearFields()

    }

    e.preventDefault()
}

function clearFields() {
    bookAuthorInput.value = "";
    bookIsbnInput.value = "";
    bookTitleInput.value = "";
}

function clearBooks() { 
    list.innerHTML = ""

    showAlert("All books cleared!", "success")
}

function showAlert(message, className) {
    const div = document.createElement("div")
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector(".container");

    container.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector(".alert").remove()
    }, 3000);
    
}

function removeBook(e) {
    if (e.target.classList.contains("delete-item")) {
        e.target.parentElement.remove()

        showAlert("Book Item Deleted", "success")
    }
}

function filterBook(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".book-row").forEach(function(book){
        const item = book.firstChild.textContent;
        console.log(item)
        if(item.toLocaleLowerCase().indexOf(book) != -1){
           book.style.display = "flex"
        } else {
            book.style.display = "none"
        }
    })
    console.log(text)
}