function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.status = function() {
        if(!this.readingStatus){
            console.log(`You still need to read: ${this.title} by ${this.author}`)
        }
        else{
            console.log(`Already read: ${this.title} by ${this.author}`)
        }
    }
}

let bookName = document.getElementById('bookName');
let authorName = document.getElementById('author');
let btn = document.getElementById('checkStatus');

btn.addEventListener('click', function(e){
    e.preventDefault();
    let title = bookName.value;
    let author = authorName.value;
    const newBook = new Book(title, author, true);
    newBook.status();
})