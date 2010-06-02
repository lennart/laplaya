function(e,p) {
  console.debug("Take a look at the final response.");
  console.dir(p.response);

  var li = $(this).parents("li");
  var list_id = li.attr("data-id");
  console.debug("List id here: "+ list_id);
  return {
    results: p.response.results,
    listId: list_id
  };
}
