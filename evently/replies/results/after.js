function(e, r) {
  console.debug("Add Results to Dom-Element for List ID:");
  console.dir(r);
  var results = r.response.results
  $(results).each(function(idx, result) {
      console.debug("Result #"+result.sid);
      var w = $$("#"+result.sid);
      w.data = result;
      w.listId = r.listId;
      });
  console.debug("Adding Results done");
}
