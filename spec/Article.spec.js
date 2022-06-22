const Article = require('../src/Article.js');
const Author = require('../src/Author.js');
describe("Article", () => {
  let article,author1,author2;
  beforeEach(() => {
   
   
    author1 = new Author('John Smith','Pimrose Ltd','075551557');
    author2 = new Author('Jinny Aoolala','Pimrose Ltd','075551587');

    article = new Article('My Lovely Book',[author1,author2]);
  })

  describe('#constructor', () => {
    it('has a title', () => {
      expect(article.title).toEqual('My Lovely Book')
    })

    it('is not on loan', () => {
      expect(article.isOnLoan()).toEqual(false)
    })
  })

  describe('#checkOut', () => {
    it ('sets the article to be on loan', () => {
      article.checkOut()
      expect(article.isOnLoan()).toEqual(true)
    })

    it ('raises an error if the article is already on loan', () => {
      article.checkOut()
      expect(() => article.checkOut()).toThrowError('item is currently on loan')
    })
  })

  describe('#checkIn', () => {
    it ('sets the article to not be on loan', () => {
      article.checkOut()
      article.checkIn()
      expect(article.isOnLoan()).toEqual(false)
    })

    it ('raises an error if the article is not on loan', () => {
      expect(() => article.checkIn()).toThrowError('item is not currently on loan')
    })
  })
  describe('#Author', () => {
    it ('get AuthorInfo', () => {
      const expected = [ { name: 'John Smith' }, { name: 'Jinny Aoolala' } ];
      
    const result =  article.getAuthorInfo();
    //console.log('result: ', result);
      expect(result).toEqual(expected);
    })
  

    
  })
})
