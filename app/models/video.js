import DS from 'ember-data';

var Video = DS.Model.extend({
  youtube_id: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string')
});

Video.reopenClass({
    FIXTURES: [
        {
        	id: 1, 
	        youtube_id: 'PElhV8z7I60',
			title: 'The xx - Islands',
			date: 'Apr 20, 2010',
			author: 'Young Turks',
			description: 'The xx in video purgatory. Directed by Saam.'
        }
    ]
})
 
export default Video;