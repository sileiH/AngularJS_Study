//为核心的AMail服务创建模块
var app = angular.module('AMail', ['ngRoute']);

//在URL、模块和控制器之间建立映射关系
function emailRouteConfig($routeProvider) {
    $routeProvider
        .when('/', {
            controller: ListController,
            templateUrl: 'list.html'
        })
        .when('/view/:id', {
            controller: DetailController,
            templateUrl: 'detail.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
app.config(emailRouteConfig);

messages = [{
    id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
    date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
    message: 'Hey, we should get together for lunch sometime and catch up.'
    + 'There are many things we should collaborate on this year.'
}, {
    id: 1, sender: 'maria@somecompany.com',
    subject: 'Where did you leave my laptop?',
    date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
    message: 'I thought you were going to put it in my desk drawer.'
    + 'But it does not seem to be there.'
}, {
    id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
    date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
    message: 'Nobody panic, but my pet python is missing from her cage.'
    + 'She doesn\'t move too fast, so just call me if you see her.'
}];

var ListController = function ($scope) {
    $scope.messages = messages;
}

var DetailController = function ($scope, $routeParams) {
    $scope.message = messages[$routeParams.id]
}
