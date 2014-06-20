$(document).ready(function(){  

	console.log("Hello mat ");

        $("#profileForm").submit(function(event){
        	console.log("Hello paul ");
               
 
                var frm = $('#profileForm');
                var basicFormatArray = frm.serializeArray();
                var wantedFormatArray = {};
               
                $.map(basicFormatArray, function(x, y) 
                                                                {
                                                                        wantedFormatArray[x['name']] = x['value'];
                                                                });
               
                var data = JSON.stringify(wantedFormatArray, null, "\t");
                               
            $.ajax({
                type: "POST",
                url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/paulforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
                data: data,
                dataType: 'json',
                contentType: "application/json",
                success: function (data) {
                    console.log('ok');
                }
            });
            
 
            event.preventDefault();
            
        });
});

