import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openNav() {
      document.getElementById("mySidenav").style.width = "215px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
});
