import Ember from 'ember';


var VideoController = Ember.Controller.extend({
	// isApiReady: false,

	// loadYouTubeDataWhenApiIsReady: function (){
	// 	var self = this;
	// 	// console.log("debugger one");
	// 	// debugger
 //         if(this.get('isApiReady')){
 //         	gapi.client.load('youtube', 'v3', function(){
 //         		gapi.client.setApiKey('AIzaSyDdz_Hharg4nf8acg4QVEcfWqdxpKkSee0');         		
 //         		self.getDataFromYoutube("blah blah");
 //         	});
			
 //         }
	// }.observes('isApiReady'),
		
	// getDataFromYoutube: function (query) {
	// 	var self = this;
	// 	if(!query){
	// 		query = "rick roll";
	// 	}
	// 	gapi.client.youtube.search.list({
	//         part: 'snippet',
	//         alt: 'json',
	//         maxResults: 1,
	//         q: query
	//     })
	//     .execute(self.showResponse);
	//     //si pongo los parentesis this dentro de showresponse ya es la clase
	//     //pero se pierde la response
	//     //si lo mando sin parentesis si me manda la response
	//     //pero el this se convierte en window
	//     //XQ? XQ? XQ?
	//     //como demonios es que sin parentesis sabe que lo que recibe es la respuesta

	// },

	// showResponse: function(response){
	// 	var self = this;
	// 	// console.log("debugger two");
	// 	// debugger
	// 	var responseString = JSON.stringify(response, '', 2);
	// 	var responseProperties = {};
		
	// 	var title = responseString.match(/"title":\s"(.*)"/);
	// 	var date = responseString.match(/"publishedAt":\s"(.*)"/);
	// 	var description = responseString.match(/"description":\s"(.*)"/);
	// 	var author = responseString.match(/"channelTitle":\s"(.*)"/);
	// 	var youtube_id = responseString.match(/"videoId":\s"(.*)"/);

	// 	responseProperties.push(youtube_id[1], title[1], date[1], author[1], description[1]);
	// 	//este for no deberia ir aqui pero bueno
	// 	//o a lo mejor y si si quito esta funcion sabe
	// 	for(var x=0; x < responseProperties.length; x++){
	// 		console.log(responseProperties[x]);
	// 	}
		
	// 	//self.dataToVideos(responseProperties); //can't por desmadre con el this

	// },

	// dataToVideos: function (responseProperties) {
	// 	//aquí se supone que guardaré ya la respuesta en el modelo de video
	// 	//pero por el momento no puedo por el bendito contexto de JS
	// 	//muerte a todos
	// 	for(var x=0; x < responseProperties.length; x++){
	// 		console.log(responseProperties[x]);
	// 	}

	// },

	// actions: {
	// 	search: function () {
	// 		var query = this.get('searchQuery');					
	// 		this.getDataFromYoutube(query);
	// 	}
	// }

});

export default VideoController;
