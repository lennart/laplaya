function() {
  var widget = $(this);
  var app =  $$(this).app;
  var trackResult = $$(this);
  var newTrack = trackResult.data;
  newTrack.type = "track";
  newTrack.created_at = new Date();
  newTrack.authorProfile = $$("#profile").profile;
  app.db.openDoc(trackResult.listId, {
      success : function(list) {
        list.tracks = list.tracks || [];
        list.tracks.push(newTrack);
        app.db.saveDoc(list, {
          success : function() {
            $("#"+trackResult.listId+"").trigger("_init");
          }
        });
      }
    });
}
