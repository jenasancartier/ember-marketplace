import Ember from 'ember';

export default Ember.Component.extend({
  model() {
   return this.store.findAll('product');
  },
  updateProductForm: false,

  actions: {
    update(rental, params) {
    this.sendAction('update', rental, params);
    }
  }
});
