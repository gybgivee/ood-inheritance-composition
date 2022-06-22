const Rent = require('./rent');

class Article extends Rent {
   
    constructor(title,authors){
        super(title);
        this.authors = authors
      }
      //article could have multiple authors
      getAuthorInfo(){
        return this.authors.map(author =>{
            return {name: author.getAuthorName()}
        })
      }
      getArticleName(){
        return this.title;
      }

}

module.exports = Article
