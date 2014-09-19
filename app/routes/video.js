import Ember from 'ember';

var VideoRoute = Ember.Route.extend({
	model: function () {		
        return this.store.find('video', 1);
     
    }
});

export default VideoRoute;
