
const formId = document.querySelector('#formId')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const email = document.querySelector('#email')
const bookList = document.querySelector('#book-list')
const container = document.querySelector('.container')

class Book {
    constructor(title, author, email) {
        this.title = title,
            this.author = author,
            this.email = email
    }
}

class UI {
    static displayBooks() {
      const Books = Store.getBooks()
      Books.forEach((book) => UI.addToListBooks(book)) 
    }
    static addToListBooks(books) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${books.title}</td>
            <td>${books.author}</td>
            <td>${books.email}</td>
            <td><i class="fas fa-times delete"></i></td>
        `
        bookList.appendChild(row)

    }
    static alert(massage, className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(massage))
        container.insertBefore(div, formId)
        setTimeout(() => {
            const alert = document.querySelector('.alert')
            alert.remove()
        }, 2000)
    }
    static clearForm(){
        title.value = ''  
        author.value = ''  
        email.value = ''  
    }
    static removeItem(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks)


// Storage Books

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }
    static addStoreBook(book){
        const booksed = Store.getBooks()
        booksed.push(book)
        localStorage.setItem('books', JSON.stringify(booksed))
    }
    static removeItems(email){
        const books = Store.getBooks()
        books.forEach((book, index) => {            
          if(book.email === email){
            books.splice(index, 1)
          }
           
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}



formId.addEventListener('submit', (e) => {
    e.preventDefault()
    const titleValue = title.value
    const authorValue = author.value
    const emailValue = email.value
    if (titleValue && authorValue && emailValue) {
        const books = new Book(titleValue, authorValue, emailValue)
        UI.addToListBooks(books)
       Store.addStoreBook(books)       
        UI.alert('Book List Success', 'success')
        UI.clearForm()
    }else{
        UI.alert('Please full fill up', 'danger')
    }
})

bookList.addEventListener('click', (e) => {
    const el = e.target
    UI.removeItem(el)
    Store.removeItems(e.target.parentElement.previousElementSibling.textContent)
    UI.alert('Item Remove', 'warning')
})






