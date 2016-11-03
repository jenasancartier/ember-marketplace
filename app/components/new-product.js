import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    saveProduct1() {
      var params = {
        title: this.get('title'),
        brand: this.get('brand'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct2', params);
    }
  }
});
