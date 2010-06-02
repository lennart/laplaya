function() {
  var profile = $$("#profile").profile;
  // $.log("profile", profile, this);
  var title = $("input[name=title]", this);
  var newTask = {
    title : title.val(),
    type : "list",
    created_at : new Date(),
    authorProfile : profile
  };
  // works because app is attached all the way down
  // maybe we need a better way to support shared state?
  $$(this).app.db.saveDoc(newTask, {
    success : function() {
      title.val('');
    }
  });
  return false;
}
