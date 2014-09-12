import Ember from 'ember';


var VideoController = Ember.Controller.extend({
	isApiReady: false,
	init: function () {
		console.log(gapi);
		//TODO check for possible race conditions
		//TODO please don't tell anybody 
           
	},

	loadYouTubeDataWhenApiIsReady: function (){
		var self = this;
         if(this.get('isApiReady')){
         	gapi.client.load('youtube', 'v3', function(){
         		gapi.client.setApiKey('AIzaSyDdz_Hharg4nf8acg4QVEcfWqdxpKkSee0');         		
         		self.getDataFromYoutube("blah blah");
         	});
			
         }
	}.observes('isApiReady'),
		
	getDataFromYoutube: function (query) {
		var self = this;
		if(!query){
			query = "rick roll";
		}
		console.log(query);
		console.log(gapi);
		gapi.client.youtube.search.list({
	        part: 'snippet',
	        alt: 'json',
	        maxResults: 1,
	        q: query
	    })
	    .execute(self.showResponse);

	   //TODO  RESEARCH promises http://wiki.commonjs.org/wiki/Promises
	},

	showResponse: function(response){
		var responseString = JSON.stringify(response, '', 2);

		var title = responseString.match(/"title":\s"(.*)"/);
		var date = responseString.match(/"publishedAt":\s"(.*)"/);
		var description = responseString.match(/"description":\s"(.*)"/);
		var author = responseString.match(/"channelTitle":\s"(.*)"/);
		var youtube_id = responseString.match(/"videoId":\s"(.*)"/);
		
		console.log(youtube_id[1]);
		console.log(title[1]);
		console.log(date[1]);
		console.log(description[1]);
		console.log(author[1]);
	},

	dataToVideos: function (entries) {
	    var results = [];
	    var entry;

	    for (var i = 0; i < entries.length; i++) {
	      entry = entries[i];
	      console.log(entry);

	      /*results.push(this.store.createRecord('video',{
	        youtube_id: entry.id.$t.split('/')[6], //TODO extract to method
	        title: entry.title.$t,
	        author: entry.author[0].name.$t,
	        date: entry.published.$t,
	        description: entry.media$group.media$description.$t

	      }))*/;
	    }
	    return results;
	},

	actions: {
		search: function () {
			var query = this.get('searchQuery');
			console.log("lo que pusiste en el search: " + query);			
			this.getDataFromYoutube(query);
		}
	}

});

export default VideoController;
