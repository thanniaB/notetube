import DS from 'ember-data';

var Video = DS.Model.extend({
  youtube_id: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string')
});
 
export default Video;