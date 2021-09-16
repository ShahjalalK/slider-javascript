const formId = document.querySelector('#formId')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const email = document.querySelector('#email')

const addFile = document.querySelector('#addFile')

const container = document.querySelector('.container')

class Book {
    constructor(title, author, email) {
        this.title = title,
            this.author = author,
            this.email = email
    }
}

class UI {
    static bookDisplay() {
        const books = Storage.getBook()
        books.forEach((book) => UI.bookToAddList(book))
    }
    static bookToAddList(books) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${books.title}</td>
            <td>${books.author}</td>
            <td>${books.email}</td>            
            <td><i class="fas fa-times delete"></i></td>
        `
        addFile.appendChild(row)
    }
    static alert(content, className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(content))
        container.insertBefore(div, formId)
        setTimeout(() => {
            const alert = document.querySelector('.alert')
            alert.remove()
        }, 2000)
    }
    static clearList(){
        title.value = ''
        author.value = ''
        email.value = ''
    }
    static removeList(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
}

document.addEventListener('DOMContentLoaded', UI.bookDisplay)

class Storage{
    static getBook(){
        let books
        if(localStorage.getItem('books') === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }
    static addBook(book){
        const books = Storage.getBook()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }
    static removeLists(title){
        const books = Storage.getBook()
       books.forEach((book, index) => {
        if(book.title === title){
           books.splice(index, 1)
        }
        localStorage.setItem('books', JSON.stringify(books))      
       })
    //    console.log(books)
    }
}


formId.addEventListener('submit', (e) => {
    e.preventDefault()
    const titleValue = title.value
    const authorValue = author.value
    const emailValue = email.value
    if(titleValue && authorValue && emailValue){
        const books = new Book(titleValue, authorValue, emailValue)
    UI.bookToAddList(books)
    Storage.addBook(books)

    UI.clearList()
    UI.alert('List Aded', 'success')
    }else{
        UI.alert('Please input fill', 'danger')
    }
    

})

addFile.addEventListener('click', (e) => {
    const el = e.target
    UI.removeList(el)
   Storage.removeLists(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    UI.alert('List Remove', 'warning')
})













