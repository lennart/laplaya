function() {
  var widget = $(this);
  var query = $("input[name=query]", this);
  var li = $(this).parents("li");
  var app = $$(this).app;
  var listId = li.attr("data-id");
  var playdar = $$("#playdar").playdar;
  var qid = playdar.Util.generate_uuid();
  playdar.client.register_results_handler(function(response, lastPoll) {
            console.log('Polling ' + response.qid);
            if(!lastPoll) {
            console.debug("No complete resolution");
//              widget.trigger("results",[{response: response, listId: listId, lastPoll: false}]); 
            }
            else {
              widget.trigger("results",[{response: response, listId: listId, lastPoll: true}]); 
            }
      
      },qid);
  var query_parts = query.val().split(/ - /);
  playdar.client.resolve(query_parts[0],query_parts[1],null,qid);
  return false;
}
