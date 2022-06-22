const Rent = require('./rent');
class Book extends Rent {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
  getBookName(){
    return this.title;
  }
}

module.exports = Book
