As a Simple Youtube user I want to see information about the video that I'm watching so that I know what it is about:
I can see the video's title.
I can see the video's description.
I can see the video's date of upload.
I can see the channel the video belongs to.
I can see the channel's thumbnail.
I can follow a link to the channel.

As a Simple Youtube user I want to be able to search for a video I want to watch so that I can watch it.
I can type the video's name on the search box and get a video in return.

As a Simple Youtube user I want to play the video on the page so that I can watch it.
I can play and pause the video inside the page.
___________________________________________________________________________

Given I have a webpage with a Youtube video loaded

When I access the webpage
Then I should be able to see the video's title
And I should be able to see the video's author
And I should be able to see the video's date of upload
And I should be able to see the video's description

When I click on the player 
The I should be able to watch the video play

# YOUTUBE NOTES AWESOME APP OMG #

## To Do: ##

*As a notetube app user I want to be able to load a video so that
- It can be played on the Youtube Player
- It can display:
	--title
	--author
	--date
	--description
	 on the page.

*Get Video Time Information

# Notetube

This README outlines the details of collaborating on this Ember application.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://iamstef.net/ember-cli/](http://iamstef.net/ember-cli/).
