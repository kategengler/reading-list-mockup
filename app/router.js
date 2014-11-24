import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'}, function(){
    this.route('list', function(){
      this.route('book')
    });
  });
});

export default Router;
