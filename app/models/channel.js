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

Channel.reopenClass({
	FIXTURES: [
		{
			id: 1,
			channelId: "UCz2lZpv1ce3hLHPJfq8xxtg",
			name: "Young Turks",
			thumbnail: "https://yt3.ggpht.com/-M6q8c0MAYb4/AAAAAAAAAAI/AAAAAAAAAAA/4zqxWGOj8hk/s88-c-k-no/photo.jpg",
			videos: [1]
		}
	]
});

export default Channel;
