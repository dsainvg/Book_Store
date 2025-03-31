document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector("ul").classList.toggle("show");
});

document.body.addEventListener("click", function (e) {
    if (!e.target.closest("nav")) {
        document.querySelector("ul").classList.remove("show");
    }
});


let wishlistBooks = localStorage.getItem("wish");
if (wishlistBooks) {
    const jsonData = JSON.parse(wishlistBooks);
    wishlistBooks = jsonData;
}
let filteredBooks = wishlistBooks;
document.getElementById("searchBar").addEventListener("keyup", function (e) {
    let term = e.target.value.trim().toLowerCase();
    filteredBooks = wishlistBooks.filter((book) =>
        book.title.toLowerCase().includes(term)
    );
    if (term === "") {
        filteredBooks = wishlistBooks;
    }
    showwishlistbooks();
});


function showwishlistbooks() {
    document.getElementById("booksContainer").innerHTML = "";/*document.getElementById("booksContainer").innerHTML += "<div class ='wishlist-heading' style='text-decoration: underline;'><h2>Your Wishlist</h2></div>";*/
    if (filteredBooks.length === null || filteredBooks.length === undefined || filteredBooks.length === 0) {
        document.getElementById("booksContainer").innerHTML = `<p>No books found</p>`;
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
showwishlistbooks();

function removeWishlist(id) {
    id = parseInt(id);
    wishlistBooks = wishlistBooks.filter((item) => item.id != id);

    localStorage.setItem("wish", JSON.stringify(wishlistBooks));
    console.log("Updated wishlist");
    filteredBooks = wishlistBooks;
    showwishlistbooks();
}
