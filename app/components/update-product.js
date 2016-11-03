import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },

    cancelUpdate() {
      this.set('updateProductForm', false);
    },

    update(product) {
      var params = {
        title: this.get('title'),
        brand: this.get('brand'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
