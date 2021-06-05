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
//toggle read status
function readStatus () {
}

readStatus.prototype.status = function () {
   // console.log(this.read)
    if (this.read === 'Read') {
        return this.read = 'Not Read'
    } else if (this.read === 'Not Read') {
        return this.read = 'Read'
    }
}

book.prototype = Object.create(readStatus.prototype)

let theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read')
myLibrary.push(theHobbit)

let gameOfThrones = new book('A Game Of Thrones', 'George R. R. Martin', 694, 'Not Read')
myLibrary.push(gameOfThrones)

let x = myLibrary.length
function addBookToLibrary() {
    if (myLibrary.length < x) {
        x = myLibrary.length
        let books = new book(input1, input2, input3, input4)
        myLibrary.push(books)
        console.log(myLibrary)
        newEntry(x)
        console.log(x + 'xB')
        x++
    } else {
        console.log(x + 'xA1')
        let books = new book(input1, input2, input3, input4)
        myLibrary.push(books)
        console.log(myLibrary)
        newEntry(x)
        x++
        console.log(x + 'xA2')
    }
}

let table = document.createElement('table');
let rowBtn = document.createElement('button');
let readBtn = document.createElement('button');

function newEntry(size) {
    for (let i = size; i < myLibrary.length; i++) {
        let row = table.insertRow(myLibrary[i])
        row.setAttribute('data-key', i)
        for (let j = 0; j < Object.keys(myLibrary[i]).length - 2; j++) {
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
                console.log(n + ' n2')
                myLibrary.splice(n, 1)
                console.log(myLibrary)
                val = myLibrary.length - n
                table.deleteRow(val)
                n++
            } else if (n > myLibrary.length){
                n = 0
                console.log(n + ' n3')
                myLibrary.splice(n, 1)
                console.log(myLibrary)
                val = myLibrary.length - n
                table.deleteRow(val)
            }else {
                console.log(n + ' n1')
                myLibrary.splice(n, 1)
                console.log(myLibrary)
                val = myLibrary.length - n
                table.deleteRow(val)
                n--
            }
        })
    }
}

newEntry(0)

let mBody = document.querySelector('body');

mBody.appendChild(table);

let newBookBtn = document.createElement('button');
newBookBtn.textContent = 'New Book';

mBody.appendChild(newBookBtn)

newBookBtn.addEventListener('click', (e) => {
    if (form.style.display == 'none') {
        form.style.display = 'block'
    } else if (form.style.display = 'block' && form.length === 0){
        setNewBook()
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
    exit.className = 'exit form'
    exit.textContent = 'X'
    form.appendChild(exit)

    submit.addEventListener('click', (e) => {
        if (!isNaN(inputPages.value)) {
            input1 = inputTitle.value.slice()
            input2 = inputAuthor.value.slice()
            input3 = parseFloat(inputPages.value.slice()) 
            input4 = getValue4()
            addBookToLibrary(input1, input2, input3, input4)
            e.preventDefault()
            form.reset()
            form.style.display = 'none'
        } else if (isNaN(inputPages.value)) {
            alert('page is not a number') //change to red box with message
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