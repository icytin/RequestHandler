RequestHandler
====================

A simple ajax request handler plugin in JavaScript. Requires jQuery.
Check out the [Demo](http://icytin.github.io/SimpleRequestHandler/)

The Handler
--------
    
    var result = requestHandler.get(params, url, async, traditional);
    
    // and

    var result = requestHandler.post(params, url, async, traditional);

Example of use
--------

### Get example

      var res = requestHandler.get({ id: $('#id').val() }, '/Controller/GetName');

### Post example

      var res = requestHandler.post({id: $('#id').val(), name: $('#nameInput').val() }, 
            '/Controller/SetName');

### Get example with a success callback function

    requestHandler.get(
        undefined, // No parameters.
        'http://ip.jsontest.com/', true, undefined, function(data) { // On success
            $('#testSuccessFunctionCallback').toggle();
            $('#testSuccessFunctionRes').html('Received IP:' + data.ip);
        });

      
       
********
_Please feel free to make this plugin better._ 
