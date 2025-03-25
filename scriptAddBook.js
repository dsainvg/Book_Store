a=books.length;
function addbooksubmit(e){
    e.preventDefault();
    let bookname = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let book = {
        id : a++,
        title: bookname,
        author: author,
        price: price,
        coverImage: imgUrl,
        description: description
    };
    if (book.id && book.title && book.author && book.price && book.coverImage && book.description){
        addBook(book);
        toggleActive();
    }
    else{
        alert("Please fill all the fields");
    }
}
function addBook(book){
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    showBooks();
    document.getElementById("addForm").reset();
}

function toggleActive(){
    document.getElementById("newBook").classList.toggle("active");
}

document.getElementById("addbook").addEventListener("click", toggleActive);

document.getElementById("closeModal").addEventListener("click", toggleActive);