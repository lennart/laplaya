function(doc) {
  if ((doc.type == "reply") && doc.results.length > 0) {
    for (var i = 0; i < doc.results.length; i++) {
      emit(doc.results[i].sid, null);
    };
  }
}
