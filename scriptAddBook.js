function addbooksubmit(e){
    e.preventDefault();
    let bookname = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let len = books.length;
    let book = {
        id : len+1,
        title: bookname,
        author: author,
        price: price,
        coverImage: imgUrl,
        description: description
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    showBooks();
    document.getElementById("addForm").reset();
}

document.getElementById("addbook").addEventListener("click", function(){
    document.getElementById("newBook").classList.toggle("active");
});

document.getElementById("closeModal").addEventListener("click", function(){
    document.getElementById("newBook").classList.toggle("active");
});