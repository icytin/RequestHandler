SimpleRequestHandler
====================

A simple request handler plugin in javascript. Requires jQuery.

Function
--------
var result = requestHandler.doRequest(typeOfRequest, params, url, async, traditional);

Get example
--------
var res = requestHandler.doRequest(TypeOfRequest.Get, { id: $('#id').val() }, '/Controller/GetName');

Post example
--------
var res = requestHandler.doRequest(TypeOfRequest.Post, {id: $('#id').val(), name: $('#nameInput').val() }, '/Controller/SetName');

Sync or async
var res = requestHandler.doRequest(TypeOfRequest.Get, { id: $('#id').val() }, '/Controller/GetName'); 


Feel free to make this plugin better.
