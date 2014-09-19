import Ember from 'ember';


var VideoController = Ember.Controller.extend({
	isApiReady: false,

	loadYouTubeDataWhenApiIsReady: function (){
		var self = this;
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
				//console.log(response);
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
		
		gapi.client.youtube.channels.list({
	        part: 'snippet',
	        id: 'UCz2lZpv1ce3hLHPJfq8xxtg'
	    }).execute(function (response) {
	    	var responseString = JSON.stringify(response, '', 2);
				//console.log(responseString);
				var responseProperties = {
					                    channelId: 'UCz2lZpv1ce3hLHPJfq8xxtg',
										name: '',
										thumbnail: '',
										};
				var nameMatch = responseString.match(/"title":\s"(.*)"/);
				var thumbnailMatch = responseString.match(/"url":\s"(.*)"/);

				responseProperties.name = nameMatch[1];
				responseProperties.thumbnail = thumbnailMatch[1];

				//console.log(responseProperties);
	    });

	},

	
	actions: {
		search: function (query) {
			//what about if we pass the query as an action parameter
			//var query = this.get('searchQuery');
			if(this.isApiReady){
				this.getDataFromYoutube(query);
			}					
			
		}		
	}

});

export default VideoController;
