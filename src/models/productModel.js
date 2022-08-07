const { DatabaseError } = require('../utils');

class ProductModel {
  constructor(opts) {
    Object.assign(this, opts);
    if (!this.db) {
      throw new DatabaseError();
    }
    this.collection = this.db.collection('products');
  }

  async insertOne(payload) {

    const result = await this.collection.insertOne(payload);

    return result;
  }
}

module.exports = ProductModel;