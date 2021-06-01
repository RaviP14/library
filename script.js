let myLibrary = []

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    }
}

function addBookToLibrary() {
    //create new book (Object.create function)
    //push book into the array
    input1 = prompt('Enter title',)
    input2 = prompt('Enter author',)
    input3 = prompt('Enter pages',)
    input4 = prompt('Enter reading status(read/not read)',)
    let books = new book(input1, input2, input3, input4)
    myLibrary.push(books)
    console.log(myLibrary)
}

let theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
myLibrary.push(theHobbit)

let gameOfThrones = new book('A Game Of Thrones', 'George R. R. Martin', 694, 'not read yet')
myLibrary.push(gameOfThrones)

let table = document.createElement('table');

function newEntry() {
    for (let i = 0; i < myLibrary.length; i++) {
        row = table.insertRow(myLibrary[i])
        for (let j = 0; j < Object.keys(myLibrary[i]).length - 1; j++) {
            let val = row.insertCell()
            val.textContent = Object.values(myLibrary[i])[j]
        }
    }
}

newEntry()

let mBody = document.querySelector('body');

mBody.appendChild(table);