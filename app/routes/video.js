import Ember from 'ember';

var VideoRoute = Ember.Route.extend({
	model: function () {		
        return this.store.find('video', 1);
        //tienes que hacer que regrese una promesa y con el this refresh servira
        //pero qué escribes como promesa? QUÉ?
    }
});

export default VideoRoute;
