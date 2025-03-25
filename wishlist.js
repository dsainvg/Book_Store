document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector("ul").classList.toggle("show");
});

document.body.addEventListener("click", function (e) {
    if (!e.target.closest("nav")) {
        document.querySelector("ul").classList.remove("show");
    }
});

document.getElementById("searchBar").addEventListener("keydown", function (e) {
    let term = e.target.value.trim().toLowerCase();
    filteredBooks = wishlistBooks.filter((book) =>
        book.title.toLowerCase().includes(term)
    );
    if (term === "") {
        filteredBooks = wishlistBooks;
    }
    showBooks();
});

let wishlistBooks = localStorage.getItem("wish");
if (wishlistBooks) {
    const jsonData = JSON.parse(wishlistBooks);
    wishlistBooks = jsonData;
}


function showCartbooks() {
    document.getElementById("booksContainer").innerHTML = "";
    /*document.getElementById("booksContainer").innerHTML += "<div class ='wishlist-heading' style='text-decoration: underline;'><h2>Your Wishlist</h2></div>";*/
    if (wishlistBooks.length === null || wishlistBooks.length === undefined || wishlistBooks.length === 0) {
        document.getElementById("booksContainer").innerHTML = `<p>No books added to wishlist</p>`;
    }
    wishlistBooks.forEach((book, index) => {
        document.getElementById("booksContainer").innerHTML += `
        <div class="wishlist-grid">
          <div class="wishlistbook" id="book${index}">
             <img class="wishlistbook-img" src="${book.coverImage}" alt="${book.title}">
             <div class="wishlistbook-info" >
                 <p class="title">${book.title}</p>
                 <p class="author">${book.author}</p>
                 <p class="description">${book.description}</p>
                 <p class="price">₹${book.price}</p>
                 <div class="actions">
                     <button class="remove" onclick="removeWishlist(${book.id})">Remove from Wishlist</button>
                 </div>
              </div>
            </div>
        <div>
        `;
    });
}
showCartbooks();

function removeWishlist(id){
    let cart = JSON.parse(localStorage.getItem("wish"));
    if(cart.find((item)=>item.id == id)){
        let updatedCart = cart.filter((item)=>{item.id != id});
        localStorage.setItem("wish", JSON.stringify(updatedCart));
        console.log("Updated wishlist")
    }
    wishlistBooks = wishlistBooks.filter((book)=>book.id != id); 
    showCartbooks(); 
}
