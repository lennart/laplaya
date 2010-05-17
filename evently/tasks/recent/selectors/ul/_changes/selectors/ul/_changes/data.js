function(r) {
  var v = r.value;
  var widget = $$(this);
  var app = widget.app;

  var qid = v.qid;
  Playdar.client.register_results_handler(
      function(response, lastPoll) {
      console.log('Polling ' + response.qid);
      if (lastPoll) {
      // Take a look at the final response.
      console.dir(response);
      var newTrack = $.extend(v, response);
      app.db.saveDoc(newTrack, { success : function() {
        if (response.solved) {
        Playdar.player.register_stream(v.results[0], 
        {
          onstop: function () {
          // Scope of 'this' is a SM Sound object
          alert('Stopped playing sound: ' + this.sID);
        }
        });
        $("#"+r.id).html("resolved");

        } else {
        $("#"+r.id).html("unresolved");
        }
        }
        });
}

},qid);
Playdar.client.resolve(v.query.artist,v.query.track,null,qid);
var stash = {
avatar_url : v.authorProfile && v.authorProfile.gravatar_url,
             body : $.linkify($.mustache.escape(r.value.body)),
             name : v.authorProfile && v.authorProfile.name,
             name_uri : v.authorProfile && encodeURIComponent(v.authorProfile.name),
             futon_path : "/_utils/document.html?"+[app.db.name,r.id].map(encodeURIComponent).join('/'),
             id : encodeURIComponent(r.id),
             solved : v.solved ? {
sid : v.results[0].sid
             } : undefined

             // todo this should be handled in dom-land / evently
             // we can use this id as a handle for automatically updating non-top rows
             // based on changes from documents
};

return stash;
}
