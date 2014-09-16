import DS from 'ember-data';

var Channel = DS.Model.extend({
	channelId: DS.attr('string'),
	name: DS.attr('string'),
	thumbnail: DS.attr('string'),
	videos: DS.hasMany('video'),
	url: function() {
	    return 'http://www.youtube.com/channel/' + this.get('channelId');
	}.property('channelId')  
});

export default Channel;
