function toggleHomecategories() {
    document.getElementById("home").classList.toggle("seen");
  } 
  window.onclick = function(e) {
    if (!e.target.matches('.symbol')) {
    var home = document.getElementById("home");
      if (home.classList.contains('seen')) {
        home.classList.remove('seen');
      }
    }
}
let Books;
try {
    Books = localStorage.getItem("Books");
    Books = JSON.parse(Books);
    console.log(Books,623);
} catch (error) {
    Books ={};
}

function addbooksubmit(){
    let bookname = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;
    let price = document.getElementById("Price").value;
    let imgUrl = document.getElementById("imgUrl").value;
    console.log(bookname,author,price,imgUrl);
    let book = {
        bookname: bookname,
        bookauthor: author,
        bookprice: price,
        bookimgUrl: imgUrl
    };
    if (Books[isbn]) {
        alert("Book already exists");
        return;
    }
    Books[isbn] = book;
    localStorage.Books = JSON.stringify(Books);
    console.log(Books);
}  
// localStorage.Books = {};