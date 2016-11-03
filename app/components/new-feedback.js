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
        review: this.get('review')
      };
      this.set('addNewFeedback', false);
      this.sendAction('saveFeedback', params);
    },

    cancelFeedback() {
      this.set('addNewFeedback', false);
    }
  }
});
