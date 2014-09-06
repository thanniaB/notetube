import Ember from 'ember';

var VideoRoute = Ember.Route.extend({
	model: function() {
        //return this.store.find('video');
        return [{
	      	youtube_id: 'PElhV8z7I60',
			title: 'The xx - Islands',
			date: 'Apr 20, 2010',
			author: 'Young Turks',
			description: 'The xx in video purgatory. Directed by Saam.'
	    }];
    }
});

export default VideoRoute;
