import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  brand: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  feedbacks: DS.hasMany('feedback', { async: true }),
  category: DS.attr()
});
