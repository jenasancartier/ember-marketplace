import Ember from 'ember';

export default Ember.Component.extend({
  addNewFeedback: false,
  actions: {
    feedbackFormShow() {
      this.set('addNewFeedback', true);
    },

    saveFeedback() {
      var params = {
        buyer: this.get('buyer'),
        rating: this.get('rating'),
        review: this.get('review'),
        product: this.get('product')
      };
      this.set('addNewFeedback', false);
      this.sendAction('saveFeedback', params);
    },
    cancelFeedback() {
      this.set('addNewFeedback', false);
    }
  }
});
