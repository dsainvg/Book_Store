let books;
try {description
    books = localStorage.getItem("books");
    books = JSON.parse(books);
} catch (error) {
    books =[];
}

function addbooksubmit(){
    let bookname = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("Price").value;
    let imgUrl = document.getElementById("imgUrl").value;
    console.log(bookname,author,price,imgUrl);
    len = books.length;
    let book = {
        id : len+1,
        bookname: bookname,
        bookauthor: author,
        bookprice: price,
        bookimgUrl: imgUrl,
        description: description
    };
    books.push(book);
    localStorage.Books = JSON.stringify(Books);
    document.getElementById("booksContainer").innerHTML += `
    <div class="book" id="book${len}">
         <img src="${book.coverImage}"
            alt="${book.title}">
         <div>
            <p class="title">${book.title}</p>
            <p class="author">${book.author}</p>
            <p class="description">${book.description}</p>
            <p class="price">₹${book.price}</p>
            <div class="actions">
               <button class="buy ${cart.find((item)=>item.id == book.id)?"added":""}" onclick="addToCart(event, ${book.id})">${cart.find((item)=>item.id == book.id)?"Added to cart":"Add to cart"}</button>
               <button class="delete" onclick="removeBook(${book.id})">Delete</button>
            </div>
         </div>
      </div>
      `;
}  

