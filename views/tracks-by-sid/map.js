function(doc) {
  if ((doc.type == "list") && doc.tracks.length > 0) {
    for (var i = 0; i < doc.tracks.length; i++) {
      emit([doc._id,doc.tracks[i].sid], doc.tracks[i]);
    };
  }
}
