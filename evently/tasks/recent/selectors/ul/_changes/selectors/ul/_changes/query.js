function() {
  var li = $(this).parents("li");
  var list_id = li.attr("data-id");
  return {
    view : "tracks",
    startkey : [list_id],
    endkey : [list_id,{}],
    type : "newRows"
  }
}
