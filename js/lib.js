var TypeOfRequest = {
    Get: 'GET',
    Post: 'POST'
}

var requestHandler = function () {

    var self;

    $(function () {
        $.ajaxSetup({
            async: false
        });
    });

    return {

        /*
        * Do a request with the specified parameters. Returns the data as JSON on success, otherwise undefined.
        *
        * # TypeOfRequest: Get or Post
        * # Params: An array with parameters
        * # url: The request url
        * # async: If the call should be asynced or not. Default is async = false.
        * # traditional: As of jQuery 1.4, the $.param() method serializes deep objects recursively to accommodate modern scripting 
        * languages and frameworks such as PHP and Ruby on Rails.You can disable this functionality globally by setting 
        * jQuery.ajaxSettings.traditional = true;. Default is undefined.
        *
        * Example (MVC):
        * var response = requestHandler.doRequest(TypeOfRequest.Post, { id: $(this).val() }, '@Url.Action("GetInformation", "Controller")')
        */
        doRequest: function (typeOfRequest, params, url, async, traditional) {

            var o = undefined;
            async = async === undefined ? false : async;
            if (!async) { // If synchronized, we block the UI
                // $.blockUI();
            }

            $.ajax({
                cache: false,
                type: typeOfRequest,
                url: url,
                data: params,
                success: function (data) {
                    o = data;
                },
                error: function (data, q, t) {
                    // Show failure.. dialog or something..
                    // $.unblockUI();
                },
                async: async,
                traditional: traditional
            });

            return o; // Undefined on failure
        }
    };
}(jQuery);