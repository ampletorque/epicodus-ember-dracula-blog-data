Blogger.PostsController = Ember.ArrayController.extend({
  // sortProperties: ['title'],    //defaults posts to be sorted by title
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    }
  }
}); 