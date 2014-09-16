import Ember from 'ember';

var VideoPlayerComponent = Ember.Component.extend({
	tagName: 'iframe',
    attributeBindings: ['src'],
    classNames: 'player',
    src: function (){  
       return "http://www.youtube.com/embed/" + this.get('youtube_id');
    }.property('youtube_id')
});

export default VideoPlayerComponent;