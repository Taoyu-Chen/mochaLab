class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find((product) => id === product.id);
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }
  removeProductById(id) {
    const removeProduct = this.findProductById(id);
    if (removeProduct) {
      this.products = this.products.filter(
        (product) => product.id !== id
      );
    }
    return removeProduct;
  }
  checkReorders() {
    const result = { type: "Reorder", productIds: [] };
    this.products.forEach( (p) => {
      if (p.quantityInStock <= p.reorderLevel) {
        result.productIds.push(p.id);
      }
    });
    return result;
  }
}
module.exports = Catalogue;
