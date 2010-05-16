function() {
  var texta = $("textarea[name=body]", this);
  var li = $(this).parents("li");
  var app = $$(this).app;
  var task_id = li.attr("data-id");

  var qid = Playdar.Util.generate_uuid();
  Playdar.client.register_results_handler(function(response, lastPoll) {
            console.log('Polling ' + response.qid);
            if (lastPoll) {
                // Take a look at the final response.
                console.dir(response);
                var newTrack = response;
                newTrack.reply_to =  task_id;
                newTrack.body = texta.val();
                newTrack.type = "reply";
                newTrack.created_at = new Date();
                newTrack.authorProfile = $$("#profile").profile;
                app.db.saveDoc(newTrack, { success : function() {
                  texta.val('');
                  }
                  });
            }
      
      },qid);
  var query = texta.val().split(/ - /);
  Playdar.client.resolve(query[0],query[1],null,qid);
  return false;
}
