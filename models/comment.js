Blogger.Comment = DS.Model.extend({
  text: DS.attr(),
  Post: DS.belongsTo('post', {async: true})
});
