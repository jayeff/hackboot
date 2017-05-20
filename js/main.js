Keen.ready(function() {
    
  new Fingerprint2().get(function(result, components){

    var client = new Keen({
      projectId: "591ff54a54532cb1704d57a2",
      writeKey: "48C40FCE5DB04152C7DEA63AD82083842D3514C1C21EBDA0DDEFF286DB5DA7620B9392AC3488C671A118C99475D7B9C2DA4C71EB1885B12EC722E15F322BBCE0F8229758C9B0F5ED4E44A9A592544A32593F33E4772B534EFF8B762B2134CD51"
    });
      
    $('#accept_easy_challenge').click(function(event) {
        var href = this.href;
        event.preventDefault();
        console.log(href);
        client.addEvent("commitments", { event_id: "easy", client_id: result }, function(){
            window.location = href;
         });
    });

    $('#accept_amazing_challenge').click(function() {
        var href = this.href;
        event.preventDefault();
        console.log(result);
        client.addEvent("commitments", { event_id: "amazing", client_id: result }, function(){
            window.location = href;
         });
    });

      $('#accept_power_challenge').click(function() {
        var href = this.href;
        event.preventDefault();
        console.log(result);
        client.addEvent("commitments", { event_id: "power", client_id: result }, function(){
            window.location = href;
         });
    });
  });
});