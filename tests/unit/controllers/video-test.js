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

///SPY NOOOOOOO

	
    //HERE A: create a mock/stub with sinon of gapi.client.load.call  http://sinonjs.org/

    var spy = sinon.spy(gapi.client, 'load'); //o stub? o mock?
    var controller = this.subject();
    var callback = function () {
         		gapi.client.setApiKey('AIzaSyDdz_Hharg4nf8acg4QVEcfWqdxpKkSee0');         		
         		self.getDataFromYoutube("xx islands");
    }
    //spy.withArgs('youtube', 'v3', callback);

    controller.set('isApiReady',false);
    //assert that A hasn't been executed
    sinon.assert.notCalled(spy);
    
    controller.set('isApiReady',true);
    //assert that A was executed with the correct parameters
    sinon.assert.notCalled(spy);
    //sinon.assert.called(spy.withArgs('youtube', 'v3', controller.callback));

    // spy.args[0] == 'youtube'
    // spy.args[1] == 'v3'
    // typeof(spy.args[2]) == "function" 


    //QUE LOCO OMG QUE EMOCION
    expect(0); 
});


 test("load first video result and store its data into the model", function() {
      //setup a fakeServer with a default youtube api response 

      
      var controller = this.subject();
      controller.send('search',  'cumbias');
      
      //after server response verify model.*
      expect(0);
 });

