class Author {
    #name
    #publisher
    #telephone
    constructor(name,publisher,telephone){
        this.#name = name;
        this.#publisher = publisher;
        this.#telephone = telephone;
    }
   

    getAuthorName(){
        return this.#name;
    }
}
module.exports = Author;