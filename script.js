let myLibrary = []

class book {
    constructor (title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info() {
          return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
    }
  }
//toggle read status
let status = {
    status() {
      if (this.read === 'Read') {
          return this.read = 'Not Read'
      } else if (this.read === 'Not Read') {
          return this.read = 'Read'
      }
  }
}

Object.assign(book.prototype, status);

let x = myLibrary.length
function addBookToLibrary() {
    if (myLibrary.length < x) {
        x = myLibrary.length
        let books = new book(input1, input2, input3, input4)
        myLibrary.push(books)
        storedBooks.push(books) //for localstorage
        localStorage.setItem('allBooks', JSON.stringify(storedBooks));
        newEntry(x)
        x++
    } else {
        let books = new book(input1, input2, input3, input4)
        myLibrary.push(books)
        storedBooks.push(books) //for localstorage
        localStorage.setItem('allBooks', JSON.stringify(storedBooks));
        newEntry(x)
        x++
    }
}

let table = document.createElement('table');
let rowBtn = document.createElement('button');
let readBtn = document.createElement('button');

function newEntry(size) {
    for (let i = size; i < myLibrary.length; i++) {
        let row = table.insertRow(myLibrary[i])
        row.setAttribute('data-key', i)
        for (let j = 0; j < Object.keys(myLibrary[i]).length - 1; j++) {
            let val = row.insertCell()
            val.textContent = Object.values(myLibrary[i])[j]
        }
        readBtn[i] = document.createElement('button');
        readBtn[i].textContent = myLibrary[i].read
        readBtn[i].className = 'readStatus'
        val3 = row.insertCell()
        val3.appendChild(readBtn[i])

        rowBtn[i] = document.createElement('button');
        rowBtn[i].textContent = 'Delete Book'
        rowBtn[i].className = 'deleteBook'
        val2 = row.insertCell()
        val2.appendChild(rowBtn[i])
    }
    //toggle read status
    for (let j = size; j < myLibrary.length; j++) {
        readBtn[j].addEventListener('click', () => {
            myLibrary[j].status()
            readBtn[j].textContent = myLibrary[j].read
        })
    }
    //delete row(book)
    for (let n = size; n < myLibrary.length; n++) {
        rowBtn[n].addEventListener('click', () => {
            if (n === myLibrary.length) {
                n--
                myLibrary.splice(n, 1)
                storedBooks.splice(n, 1)
                localStorage.setItem('allBooks', JSON.stringify(storedBooks));
                val = myLibrary.length - n
                table.deleteRow(val)
                n++
            } else if (n > myLibrary.length){
                n = 0
                myLibrary.splice(n, 1)
                storedBooks.splice(n, 1)
                localStorage.setItem('allBooks', JSON.stringify(storedBooks));
                val = myLibrary.length - n
                table.deleteRow(val)
            }else {
                myLibrary.splice(n, 1)
                storedBooks.splice(n, 1)
                localStorage.setItem('allBooks', JSON.stringify(storedBooks));
                val = myLibrary.length - n
                table.deleteRow(val)
                n--
            }
        })
    }
}

let mBody = document.querySelector('body');

mBody.appendChild(table);

let newBookBtn = document.createElement('button');
newBookBtn.textContent = 'New Book';
newBookBtn.className = 'NewBook'
mBody.appendChild(newBookBtn)

newBookBtn.addEventListener('click', (e) => {
    if (form.length === 0) {
        setNewBook()
        form.style.display = 'block'
    } else if (form.style.display = 'block' && form.length === 0){
        setNewBook()
    } else if (form.style.display = 'none') {
        form.style.display = 'block'
    }
})

//form input(new book)
let form = document.createElement('form')
mBody.appendChild(form)

function setNewBook () {
    let headTitle = document.createElement('p');
    headTitle.textContent = 'Title'
    form.appendChild(headTitle);

    let inputTitle = document.createElement('input');
    inputTitle.name = 'title';
    inputTitle.placeholder = 'Title'
    inputTitle.autocomplete = 'off'
    form.appendChild(inputTitle)

    let headAuthor = document.createElement('p');
    headAuthor.textContent = 'Author'
    form.appendChild(headAuthor);

    let inputAuthor = document.createElement('input');
    inputAuthor.name = 'author'
    inputAuthor.placeholder = 'Author'
    inputAuthor.autocomplete = 'off'
    form.appendChild(inputAuthor);

    let headPages = document.createElement('p');
    headPages.textContent = 'Total Pages'
    form.appendChild(headPages);

    let inputPages = document.createElement('input');
    inputPages.name = 'pages'
    inputPages.placeholder = 'Total Pages'
    inputPages.autocomplete = 'off'
    form.appendChild(inputPages);

    let headStatus = document.createElement('p');
    headStatus.textContent = 'Read?'
    headStatus.className = 'readText'
    form.appendChild(headStatus);

    let inputStatus = document.createElement('input');
    inputStatus.setAttribute('type', 'checkbox')
    inputStatus.name = 'status'
    inputStatus.placeholder = 'Read Status'
    inputStatus.autocomplete = 'off'
    form.appendChild(inputStatus);

    let submit = document.createElement('button');
    submit.name = 'submit'
    submit.className = 'submitForm'
    submit.textContent = 'Submit'
    form.appendChild(submit);

    let exit = document.createElement('button');
    exit.className = 'exitForm'
    exit.textContent = 'X'
    form.appendChild(exit)

    submit.addEventListener('click', (e) => {
        if (!isNaN(inputPages.value) && inputTitle.value !== '' && inputAuthor.value !== '' && inputPages.value !== '') {
            input1 = inputTitle.value.slice()
            input2 = inputAuthor.value.slice()
            input3 = parseFloat(inputPages.value.slice()) 
            input4 = getValue4()
            addBookToLibrary(input1, input2, input3, input4)
            e.preventDefault()
            form.reset()
            form.style.display = 'none'
        } else if(inputTitle.value === '' && inputAuthor.value === '' && inputPages.value === '') {
            alert('Fill in form')
            e.preventDefault()
        } else if (inputTitle.value === '' && inputAuthor.value === '') {
            alert('Add Title & Author')
            e.preventDefault()
        } else if(inputTitle.value === '' && inputPages.value === ''){
            alert('Add Title & Pages')
            e.preventDefault()
        } else if (inputAuthor.value === '' && inputPages.value === '') {
            alert('Add Author & Pages')
            e.preventDefault()
        } else if (inputTitle.value === ''){
            alert('Add Title')
            e.preventDefault()
        } else if (inputAuthor.value === ''){
            alert('Add Author')
            e.preventDefault()
        } else if (inputPages.value === ''){
            alert('Add Pages')
            e.preventDefault()
        } else if (isNaN(inputPages.value)) {
            alert('Page is not a number')
            e.preventDefault()
        }
    })

    exit.addEventListener('click', (e) => {
        e.preventDefault()
        form.reset()
        form.style.display = 'none'
    })

    function getValue4() {
        if (inputStatus.checked === true) {
            return 'Read'
        } else {
            return 'Not Read'
        }
    }
}

//add array to localStorage
localStorage.setItem('myBooks', JSON.stringify(myLibrary));
let storedBooks = JSON.parse(localStorage.getItem('myBooks'))

if (localStorage.allBooks.length > 2) {
    storedBooks = JSON.parse(localStorage.getItem('allBooks'))
    let getAllBooks = JSON.parse(localStorage.getItem('allBooks'))
    for (l = 0; l < getAllBooks.length; l++) {
       input1 = getAllBooks[l].title
       input2 = getAllBooks[l].author
       input3 = getAllBooks[l].pages
       input4 = getAllBooks[l].read
       let books = new book(input1, input2, input3, input4)
       myLibrary.push(books)
       x = myLibrary.length - 1
       newEntry(x)
       x = myLibrary.length
    }
} else { 
    let theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read')
    myLibrary.push(theHobbit)

    let gameOfThrones = new book('A Game Of Thrones', 'George R. R. Martin', 694, 'Not Read')
    myLibrary.push(gameOfThrones)
    x = myLibrary.length
    newEntry(0)
}
