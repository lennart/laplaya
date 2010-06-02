function(doc) {
  if (doc.type == "list") {
    emit(doc.title, doc)
  }
}

