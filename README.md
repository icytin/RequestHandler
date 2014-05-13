SimpleRequestHandler
====================

A simple request handler plugin in javascript. Requires jQuery.

Post example
----
var res = requestHandler.doRequest(TypeOfRequest.Post, {id: $('#id').val(), name: $('#nameInput').val() }, 		    	'/Controller/SetName');

Get example
----
var res = requestHandler.doRequest(TypeOfRequest.Get, { id: $('#id').val() }, '/Controller/GetName'); 

	
Feel free to make this plugin better.
