import Ember from 'ember';

var VideoController = Ember.Controller.extend({
	init: function () {
		// console.log('init video controller ',this.toString());
		// console.debug('model',this.get('model'));
		this.getDataFromYoutube("blah blah");
	},
	// onModelChange:function() {
    //  console.log('onModelChange video controller :',this.toString());
	// 	console.debug('model',this.get('model'));
	// }.observes('model')
	
	getDataFromYoutube: function (query) {
		var self = this;
		var c = $.getJSON(
    		"http://gdata.youtube.com/feeds/api/videos",
    		{ 
    			part: 'snippet', alt: 'json', 'max-results': 1, q: query 
    		});

		c.success(function (data) {
			console.log(self.dataToVideos(data.feed.entry));
	    });
	    
	},


	dataToVideos: function (entries) {
	    var results = [];
	    var entry;

	    for (var i = 0; i < entries.length; i++) {
	      entry = entries[i];
	      console.log(entry);

	      results.push(/*this.store.createRecord('video',*/{
	        youtube_id: entry.id.$t.split('/')[6],
	        title: entry.title.$t,
	        author: entry.author[0].name.$t,
	        date: entry.published.$t,
	        description: entry.media$group.media$description.$t

	      })/*)*/;
	    }

	    return results;
	},

});

export default VideoController;
