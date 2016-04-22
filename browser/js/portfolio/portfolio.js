app.config(function ($stateProvider) {

    // Register our *portfolio* state.
    $stateProvider.state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioController',
        templateUrl: 'js/portfolio/portfolio.html'
    });

});

app.controller('PortfolioController', function ($scope) {


});