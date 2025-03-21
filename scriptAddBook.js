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
    Books = [];
}

function addbooksubmit(){
    let bookname = document.getElementById("bookname");
    let author = document.getElementById("author");
    let price = document.getElementById("Price");
    let imgUrl = document.getElementById("imgUrl");
    console.log(bookname,author,price,imgUrl);
    let book = {
        bookname: bookname.value,
        bookauthor: author.value,
        bookprice: price.value,
        bookimgUrl: imgUrl.value
    };
    Books.push(book);
    console.log(555);
    localStorage.Books = JSON.stringify(Books);
    console.log(Books);
}  