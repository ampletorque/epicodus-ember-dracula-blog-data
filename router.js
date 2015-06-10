Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('author');
  this.resource('contact', function() {
    this.resource('sonar');
    this.resource('email');
  });
  this.resource('recent-comments');
  this.resource('post', {path: 'posts/:post_id'});
  this.resource('new-post');
});
