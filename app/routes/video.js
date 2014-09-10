import Ember from 'ember';

var VideoRoute = Ember.Route.extend({
	// afterModel: function(video){

	// 	console.debug('afterModel(video)',video);

	// },


 // setupController: function(controller, video) {
 //    this._super(controller, video);

	// console.debug('on setupController model:',video);
 //  },


	model: function() {
		//console.debug('on model');
        //return this.store.find('video');
        return {
	      	youtube_id: 'PElhV8z7I60',
			title: 'The xx - Islands',
			date: 'Apr 20, 2010',
			author: 'Young Turks',
			description: 'The xx in video purgatory. Directed by Saam.'
	    };
    }
});

export default VideoRoute;
