document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector("ul").classList.toggle("show");
});

document.body.addEventListener("click", function (e) {
    if (!e.target.closest("nav")) {
        document.querySelector("ul").classList.remove("show");
    }
});

document.getElementById("searchBar").addEventListener("keyup", function (e) {
    let term = e.target.value.trim().toLowerCase();
    filteredBooks = cartBooks.filter((book) =>
        book.title.toLowerCase().includes(term)
    );
    if (term === "") {
        filteredBooks = cartBooks;
    }
    showCartbooks();
});

let cartBooks = localStorage.getItem("cart");
if (cartBooks) {
    const jsonData = JSON.parse(cartBooks);
    cartBooks = jsonData;
    console.log(jsonData);
}
let filteredBooks = cartBooks;

function showCartbooks() {
    document.getElementById("booksContainer").innerHTML = "";
    /*document.getElementById("booksContainer").innerHTML += "<div class ='wishlist-heading' style='text-decoration: underline;'><h2>Your Wishlist</h2></div>";*/
    if (filteredBooks.length === null || filteredBooks.length === undefined || filteredBooks.length === 0) {
        document.getElementById("booksContainer").innerHTML = `<p>No books added to Cart</p>`;
    }
    filteredBooks.forEach((book, index) => {
        document.getElementById("booksContainer").innerHTML += `
        <div class="wishlist-grid">
          <div class="wishlistbook" id="book${index}">
             <img class="wishlistbook-img" src="${book.coverImage}" alt="${book.title}">
             <div class="wishlistbook-info" >
                 <p class="title">${book.title}</p>
                 <p class="author">${book.author}</p>
                 <p class="description">${book.description}</p>
                 <p class="quantity">Quantity: ${book.quantity}</p>
                 <p class="price">₹${book.price}</p>
                 <div class="actions">
                     <button class="remove" onclick="removefromcart(${book.id})">Remove from Cart</button>
                 </div>
              </div>
            </div>
        <div>
        `;
    });
}
showCartbooks();

function removefromcart(id){
    id = parseInt(id);
    if(cartBooks.find((item)=>item.id == id)){
        cartBooks = cartBooks.filter((item)=>item.id != id);
        localStorage.setItem("cart", JSON.stringify(cartBooks));
    }
    filteredBooks = cartBooks;
    showCartbooks(); 
}
