function(doc) {
  if (doc.type == "list") {
    emit(doc.created_at, doc)
  }
}

