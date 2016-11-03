import DS from 'ember-data';

export default DS.Model.extend({
  buyer: DS.attr(),
  review: DS.attr(),
  rating: DS.attr(),
  product: DS.belongsTo('product', { async: true }),
});
