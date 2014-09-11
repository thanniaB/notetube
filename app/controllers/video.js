import Ember from 'ember';


var VideoController = Ember.Controller.extend({
	isApiReady: false,
	init: function () {
		// console.log('init video controller ',this.toString());
		// console.debug('model',this.get('model'));
		console.log(gapi);
		//TODO check for possible race conditions
		//TODO please don't tell anybody 
           
	},

	loadYouTubeDataWhenApiIsReady: function (){
		var self = this;
         if(this.get('isApiReady')){
         	gapi.client.load('youtube', 'v3', function(){         		
         		self.getDataFromYoutube("blah blah");
         	});
			
         }
	}.observes('isApiReady'),
	// onModelChange:function() {
    //  console.log('onModelChange video controller :',this.toString());
	// 	console.debug('model',this.get('model'));
	// }.observes('model')
	
	getDataFromYoutube: function (query) {
		var self = this;
	 // TODO use the gdata api wrapper
	 // https://apis.google.com/js/client.js?onload=googleApiClientReady
		// $.getJSON( "http://gdata.youtube.com/feeds/api/videos",{ 
  //   			part: 'snippet', alt: 'json', 'max-results': 1, q: query 
  //   		})
		//     .success(function (data) {
		// 	     console.log(self.dataToVideos(data.feed.entry));

	 //        });

		console.log(gapi);
		gapi.client.youtube.search.list({
	        part: 'snippet',
	        alt: 'json',
	        'max-results': 1,
	        q: query
	    })
	    .execute(self.showResponse/*function (data) {
	    	debugger
			console.log(self.onSearchResponse(data.feed.entry));
	 	}*/);

	   //TODO  RESEARCH promises http://wiki.commonjs.org/wiki/Promises    


	},

	showResponse: function(response){
		var responseString = JSON.stringify(response, '', 2);
    	console.log(responseString);
	},

	dataToVideos: function (entries) {
	    var results = [];
	    var entry;

	    for (var i = 0; i < entries.length; i++) {
	      entry = entries[i];
	      console.log(entry);

	      results.push(/*this.store.createRecord('video',*/{
	        youtube_id: entry.id.$t.split('/')[6], //TODO extract to method
	        title: entry.title.$t,
	        author: entry.author[0].name.$t,
	        date: entry.published.$t,
	        description: entry.media$group.media$description.$t

	      })/*)*/;
	    }
        // this.set('firstResult', results[0]) ;
	    return results;
	},

    // firstResult: null,
    // title: Ember.computed.alias('firstResult.title'),
    // fancyTitle: function(){
    // 	return this.get('title') + " fancy ";
    // }.property(),


    //  {
    //  	this.set('fancyTitle','jejejejeje');
    //  	//ember run loop?
    //  }




});

export default VideoController;
