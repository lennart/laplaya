function(r) {
  var v = r.value;
  var app = $$(this).app;

  var qid = v.qid;
  Playdar.client.register_results_handler(function(response, lastPoll) {
            console.log('Polling ' + response.qid);
            if (lastPoll) {
                // Take a look at the final response.
                console.dir(response);
                var newTrack = $.extend(v, response);
                app.db.saveDoc(newTrack, { success : function() {
                  if (response.solved) {
                    $("#"+r.id).html("resolved");
                  } else {
                    $("#"+r.id).html("unresolved");
                  }
                  }
                  });
            }
      
      },qid);
  Playdar.client.resolve(v.query.artist,v.query.track,null,qid);
  return {
    avatar_url : v.authorProfile && v.authorProfile.gravatar_url,
    body : $.linkify($.mustache.escape(r.value.body)),
    name : v.authorProfile && v.authorProfile.name,
    name_uri : v.authorProfile && encodeURIComponent(v.authorProfile.name),
    futon_path : "/_utils/document.html?"+[app.db.name,r.id].map(encodeURIComponent).join('/'),
    id : encodeURIComponent(r.id),
    solved : v.solved
    // todo this should be handled in dom-land / evently
    // we can use this id as a handle for automatically updating non-top rows
    // based on changes from documents
  };
}
