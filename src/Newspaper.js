const Rent = require('./rent');
class Newspaper extends Rent {

  checkIn() {
    throw new Error('newspapers are not available for loan')
  }

  checkOut() {
    throw new Error('newspapers are not available for loan')
  }
}

module.exports = Newspaper
