app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('blog', {
        url: '/blog',
        controller: 'BlogController',
        templateUrl: 'js/blog/blog.html'
    });

});

app.controller('BlogController', function ($scope, allPosts) {


});