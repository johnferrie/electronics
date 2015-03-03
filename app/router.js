import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('electronics', { path: '/' }, function() {
    this.route('show', { path: '/electronics/:electronic_id' }, function() {
      this.resource('devices', function() {
        this.route('show', { path: ':device_id' }, function() {});
      });
    });
  });
});

export default Router;
