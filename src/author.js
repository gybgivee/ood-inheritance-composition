class Author {
    constructor(name,publisher,telephone){
        this.name = name;
        this.publisher = publisher;
        this.telephone = telephone;
    }
   

    getAuthorName(){
        return this.name;
    }
}
module.exports = Author;