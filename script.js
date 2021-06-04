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

let theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
myLibrary.push(theHobbit)

let gameOfThrones = new book('A Game Of Thrones', 'George R. R. Martin', 694, 'not read yet')
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

function newEntry(size) {
    for (let i = size; i < myLibrary.length; i++) {
        let row = table.insertRow(myLibrary[i])
        row.setAttribute('data-key', i)
        for (let j = 0; j < Object.keys(myLibrary[i]).length - 1; j++) {
            let val = row.insertCell()
            val.textContent = Object.values(myLibrary[i])[j]
        }
        rowBtn[i] = document.createElement('button');
        rowBtn[i].textContent = 'Delete Book'
        rowBtn[i].className = 'deleteBook' + [i]
        val2 = row.insertCell()
        val2.appendChild(rowBtn[i])
    }

    for (let n = size; n < myLibrary.length; n++) {
        //delete row(book)
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
    } else if (form.style.display = 'block'){
        setNewBook()
    }
})

//form input(new book)
let form = document.createElement('form')
mBody.appendChild(form)

function setNewBook () {
    let inputTitle = document.createElement('input');
    inputTitle.name = 'title';
    inputTitle.placeholder = 'Title'
    inputTitle.autocomplete = 'off'
    form.appendChild(inputTitle)

    let inputAuthor = document.createElement('input');
    inputAuthor.name = 'author'
    inputAuthor.placeholder = 'Author'
    inputAuthor.autocomplete = 'off'
    form.appendChild(inputAuthor);

    let inputPages = document.createElement('input');
    inputPages.name = 'pages'
    inputPages.placeholder = 'Total Pages'
    inputPages.autocomplete = 'off'
    form.appendChild(inputPages);

    let inputStatus = document.createElement('input');
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
            input4 = inputStatus.value.slice()
            addBookToLibrary(input1, input2, input3, input4)
            e.preventDefault()
            form.reset()
            form.style.display = 'none'
        } else {
            alert('page is not a number') //change to red box with message
            e.preventDefault()
        }
    })

    exit.addEventListener('click', (e) => {
        e.preventDefault()
        form.reset()
        form.style.display = 'none'
    })
}