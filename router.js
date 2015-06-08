Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('author');
  this.resource('contact', function() {
    this.resource('sonar');
    this.resource('email');    
  });
});
