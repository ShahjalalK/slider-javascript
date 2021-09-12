// Book Class: Represents a Book
class Book {
    constructor(title, author, email){
        this.title = title,
        this.author = author,
        this.email = email
    }
}

// UI Class: Handles Storage


// Store Class: Handles Storage

// Event: Display Books
class UI {
    static displayBooks(){
      
        const books = StoredBook()
        books.forEach((book) => UI.addBookToList(book))
    }
    static alerts(massage, className){
        const div = document.createElement('div') 
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(massage))
        const formId = document.querySelector('#formId')
        const container = document.querySelector('.container')
        container.insertBefore(div, formId)

        setTimeout(() => {
            const alert = document.querySelector('.alert')
            alert.remove()
            
        }, 3000)
    }
    static addBookToList(book){
        const booked = document.querySelector('#book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.email}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        booked.appendChild(row)
    }
    static clearFields(){
        document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#email').value = ''
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
}


document.addEventListener('DOMContentLoaded', UI.displayBooks)


// Event: add a Book
const formId = document.querySelector('#formId')
formId.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const email = document.querySelector('#email').value
    if(title == '' || author == ''|| email == ''){
        UI.alerts('Please Full Fill', 'danger fs-4')
    }else{
        UI.alerts('Add Book Success', 'primary fs-4')
        const book = new Book(title, author, email)
    UI.addBookToList(book)
    UI.clearFields()
    
    }
})

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
    UI.alerts('Book Removed', 'success fs-4')
})


