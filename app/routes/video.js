import Ember from 'ember';

var VideoRoute = Ember.Route.extend({
	isApiReady: false,	

	loadYouTubeDataWhenApiIsReady: function (){
		var self = this;
		//console.log("debugger one");
		// debugger
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
		gapi.client.youtube.search.list({
	        part: 'snippet',
	        alt: 'json',
	        maxResults: 1,
	        q: query
	    })
	    .execute(self.showResponse);
	    //si pongo los parentesis this dentro de showresponse ya es la clase
	    //pero se pierde la response
	    //si lo mando sin parentesis si me manda la response
	    //pero el this se convierte en window
	    //XQ? XQ? XQ?
	    //como demonios es que sin parentesis sabe que lo que recibe es la respuesta

	},

	showResponse: function(response){
		// console.log("debugger two");
		// debugger
		var self = window.Notetube.__container__.lookup('route:video');
		var responseString = JSON.stringify(response, '', 2);
		var responseProperties = {youtube_id: '',
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
		//este for no deberia ir aqui pero bueno
		//o a lo mejor y si si quito esta funcion sabe
		//console.log(responseProperties);
		self.model(responseProperties);	

	},

	// model: function(responseProperties) {
	// 	console.log("model");
	// 	console.log(responseProperties);
        return this.store.find('video', 1);
   
	  // 	return {
	  //     	youtube_id: responseProperties.youtube_id,
			// title: responseProperties.title,
			// date: responseProperties.date,
			// author: responseProperties.author,
			// description: responseProperties.description
	  //   };
	  // tendría que usar una promesa porque la data no está lista luego luego

    }
});

export default VideoRoute;
