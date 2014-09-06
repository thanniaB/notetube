import Ember from 'ember';

var Router = Ember.Router.extend({
  //location: NotetubeENV.locationType
});

Router.map(function() {  
  this.resource('video', { path: '/'});
});

export default Router;
