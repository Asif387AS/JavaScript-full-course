console.log('College library Exercise 4');
class library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBooks={};
    }
    getBookList(){
this.bookList.forEach(element => {
    console.log(element);
});
    }
    
    issueBook(bookName,user){
        if( this.issuedBooks[bookName]==undefined ){
        this.issuedBooks[bookName]=user;
        }
        else{
            console.log('This book is already issued');
        }
    }
    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}
// function library(bookList){
//     this.bookList=bookList;
//     this.issuedBooks={};
// }

// library.prototype.getBookList=function(){
//     this.bookList.forEach(element => {
//     console.log(element);
// }
// }

