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
      console.log(params);
      var newFeedback = this.store.createRecord('feedback', params);
      var product = params;
      product.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', product);
    }
  }
});
