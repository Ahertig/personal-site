app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('blog', {
        url: '/blog',
        controller: 'BlogController',
        templateUrl: 'js/blog/blog.html',
        resolve: {
          allPosts: function(BlogFactory) {
            console.log('what')
            return BlogFactory.fetchPosts();
          }
        }
    });
    // .state( , {
    //   url: '/blog/:id',
    //   templateUrl: 'js/blog/singlePost.html'
    // })

});

app.controller('BlogController', function ($scope, allPosts) {

  console.log('all posts', allPosts)

  $scope.posts = allPosts;

});

app.factory('BlogFactory', function ($http) {
  var BlogFactory = {};

  BlogFactory.fetchPosts = function() {
    return $http.get('/api/posts')
    .then(function(response) {
      console.log('here is the response data', response.data)
      return response.data;
    })
  }

  return BlogFactory;

});


