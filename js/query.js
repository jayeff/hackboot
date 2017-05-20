Keen.ready(function(){

        // Get GET id parameter  
        var eventvar = getQueryVariable("event");

        function getQueryVariable(variable) {
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
              return pair[1];
            }
          } 
        }
           
        // Query events
        var client = new Keen({
          projectId: "591ff54a54532cb1704d57a2",
          readKey:  "E99F8B0E12EB7553CF11C8325C62B3A1949D6513E1F10E59E1D65A917FBE53620B85DA3A0522B658B2FAD7D3D79BF45940B3A90614BC7F7AD05698BD152F6DC721FDC705C3656A891D34C73BB4C9956227271E957557268BE421F7848B37DDA2"
        });
         
        var count_unique = new Keen.Query("count_unique", {
          event_collection: "commitments",
          target_property: "client_id",
          filters: [
            {
              property_name: "event_id",
              operator: "eq",
              property_value: eventvar
            }
          ]  
        }); 

        // Send query
        client.run(count_unique, function(err, response){
            // if (err) handle the error
            console.log(response.result);
            $('#number_challenger').html(response.result)
        });  
});