import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model: function() {
    return this.store.query('product', {
      orderBy: 'category',
      equalTo: 'audio'
    });
  }
});
