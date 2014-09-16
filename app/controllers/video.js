import Ember from 'ember';


var VideoController = Ember.Controller.extend({
	isApiReady: false,

	loadYouTubeDataWhenApiIsReady: function (){
		var self = this;
		// console.log("debugger one");
		// debugger
         if(this.get('isApiReady')){
         	gapi.client.load.call(self,'youtube', 'v3', function(){
         		gapi.client.setApiKey('AIzaSyDdz_Hharg4nf8acg4QVEcfWqdxpKkSee0');         		
         		self.getDataFromYoutube("xx islands");
         	});
			
         }
	}.observes('isApiReady'),
		
	getDataFromYoutube: function (query) {
		var self = this;
		if(!query){
			query = "rick astley never gonna give you up";
		}
		var request = gapi.client.youtube.search.list({
	        part: 'snippet',
	        alt: 'json',
	        maxResults: 1,
	        q: query
	    });
	    
	    request.execute(function (response) {
				var responseString = JSON.stringify(response, '', 2);
				console.log(responseString);
				var responseProperties = {
					                    youtube_id: '',
										title: '',
										date: '',
										author: '',
										description: ''
										};
				
				var titleMatch = responseString.match(/"title":\s"(.*)"/);
				var dateMatch = responseString.match(/"publishedAt":\s"(.*)"/);
				var descriptionMatch = responseString.match(/"description":\s"(.*)"/);
				var authorMatch = responseString.match(/"channelTitle":\s"(.*)"/);
				var youtube_idMatch = responseString.match(/"videoId":\s"(.*)"/);

				responseProperties.youtube_id = youtube_idMatch[1];
				responseProperties.title = titleMatch[1];
				responseProperties.date = dateMatch[1];
				responseProperties.author = authorMatch[1];
				responseProperties.description = descriptionMatch[1];

		        self.set('model.title',responseProperties.title);   
		        self.set('model.youtube_id',responseProperties.youtube_id); 
		        self.set('model.date',responseProperties.date); 
		        self.set('model.author',responseProperties.author); 
		        self.set('model.description',responseProperties.description);
		       
		});

	},

	
	actions: {
		search: function () {
			var query = this.get('searchQuery');					
			this.getDataFromYoutube(query);
		}		
	}

});

export default VideoController;
