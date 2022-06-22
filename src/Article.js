const Rent = require('./rent');

class Article extends Rent {
    constructor(title,author){
        super(title);
        this.author = author;
      }
      getArticleName(){
        return this.title;
      }
}

module.exports = Article
