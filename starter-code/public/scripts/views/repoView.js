'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  repoView.index = function() {
    //this function renders the repos to the about ul
    //it also get called in aboutController
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };
// 
  module.repoView = repoView;
})(app);
