import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:video', 'VideoController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  setup: function () {
    // prepare something for all following tests

    window.gapi = {
    	client: {
    		load: function (name, version, callback) {

    		},
	    	setApiKey: function (apiKey){
	    		
	    	}
    	}
    };
  },
  teardown: function() {
    // clean up after each test

    delete window.gapi;
  }
});
 

// Replace this with your real tests.
test('controller exists', function() {
  var controller = this.subject();
  ok(controller);
});

test("load default video data only when youtube data is loaded", function() {

    //HERE A: create a mock/stub with sinon of gapi.client.load.call  http://sinonjs.org/
    var controller = this.subject();
    var mock = sinon.mock(gapi.client);    

    controller.set('isApiReady',false);
    //assert that A hasn't been executed
    
    controller.set('isApiReady',true);
    //assert that A was executed with the correct parameters
    mock.expects('load');//.withArgs("youtube", "v3", function () {}).once();
    mock.verify();
    mock.restore();
    
    expect(0); 
});


 test("load first video result and store its data into the model", function() {
      //setup a fakeServer with a default youtube api response 

      
      var controller = this.subject();
      controller.send('search',  'cumbias');
      
      //after server response verify model.*
      expect(0);
 });

