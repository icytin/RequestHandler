SimpleRequestHandler
====================

A simple ajax request handler plugin in JavaScript. Requires jQuery.

The Handler
--------

      var result = requestHandler.doRequest(typeOfRequest, params, url, async, traditional);

Example of use
--------

### Get example

      var res = requestHandler.doRequest(TypeOfRequest.Get, { id: $('#id').val() }, '/Controller/GetName');

### Post example

      var res = requestHandler.doRequest(TypeOfRequest.Post, {id: $('#id').val(), name: $('#nameInput').val() }, 
            '/Controller/SetName');



      
       
********
_Feel free to make this plugin better._ 
