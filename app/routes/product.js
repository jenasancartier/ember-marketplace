import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      feedbacks: this.store.findAll('feedback'),
      products: this.store.findRecord('product', params.product_id)
    });
  },

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      newFeedback.save();
      this.transitionTo('product');
    }
  }
});
