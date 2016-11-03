import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
    var newTotal = this.get('total') + parseInt(item.get('price'));
    this.set("total", newTotal);
  },
});
