import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('about');
    this.route('portfolio');
    this.route('services');
  });
  this.route('contact');
  this.route('404', { path: '/*path' });
});

export default Router;
