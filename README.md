SimpleRequestHandler
====================

A simple request handler plugin in javascript. Requires jQuery.

Post example
===========
var res = requestHandler.doRequest(TypeOfRequest.Post, // Post
	{id: $('#id').val(), name: $('#nameInput').val() }, // Parameters
	'/Controller/SetName'); // Action

Get example
===========
var res = requestHandler.doRequest(TypeOfRequest.Get, // Get
	{id: $('#id').val() }, // Parameters
	'/Controller/GetName'); // Action

	
Feel free to make this plugin better.