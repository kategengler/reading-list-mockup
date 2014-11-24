import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    console.log('active')
    this.send('hasThirdPane', true);
  },
  deactivate: function(){
    this.send('hasThirdPane', false);
  }
});
