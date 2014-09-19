import DS from 'ember-data';

var Video = DS.Model.extend({
  youtube_id: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('string'),
  channel: DS.belongsTo('channel'),
  description: DS.attr('string')
});

Video.reopenClass({
	FIXTURES: [
		{
			id: 1,
			youtube_id: "PElhV8z7I60",
			title: "The xx - Islands",
			date: "Apr 20, 2010",
			channel: 1,
			description: "The xx in video purgatory. Directed by Saam."
		}
	]
});
 
export default Video;