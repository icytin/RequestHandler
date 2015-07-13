RequestHandler
====================

A simple ajax request handler plugin in JavaScript. Requires jQuery.
Check out the [Demo](http://icytin.github.io/SimpleRequestHandler/)

The Handler
--------
    
    var result = requestHandler.getOrPost(params, url, async, traditional, successCallback);

Example of use
--------

### Sync Get example

      var res = requestHandler.get({ id: $('#id').val() }, '/Controller/GetName');

### Sync Post example

      var res = requestHandler.post({id: $('#id').val(), name: $('#nameInput').val() }, 
            '/Controller/SetName');
            
### Async Get example

    requestHandler.get({ id: $('#id').val() }, '/Controller/GetName', true);

### Async Get example with a success callback function

    requestHandler.get(
        undefined, // No parameters.
        'http://ip.jsontest.com/', true, undefined, function(data) { // On success
            $('#testSuccessFunctionCallback').toggle();
            $('#testSuccessFunctionRes').html('Received IP:' + data.ip);
        });

      
       
********
_Please feel free to make this plugin better._ 
