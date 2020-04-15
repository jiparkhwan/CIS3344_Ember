import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('search');
  this.route('host');
  this.route('login');
  this.route('about');
  this.route('tutorial');
  this.route('rental', {path: '/rentals/:rental_id'});
});
