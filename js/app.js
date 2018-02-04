
var backstage = angular.module("backstage", ['ui.router','oc.lazyLoad','ngCookies']);

backstage.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: '/html/login.html',
            resolve: {
                loadMyFile: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["css/login.css"]);
                }]
            }
        })

        .state('bacManage', {
            url: '/bacManage',
            templateUrl: 'html/bacManage.html',
            resolve: {
                loadMyFile: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["css/bacManage.css"]);
                }]
            }
        })
        //=================蠢=================================
        .state('bacManage.dataVisual_increase', {
            url: '/dataVisual_increase',
            templateUrl: '/html/dataVisual_increase.html',
            resolve: {
                loadMyFile: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["css/dataVisual.css"]);
                }]
            }
        })
        .state('bacManage.dataVisual_all', {
            url: '/dataVisual_all',
            templateUrl: '/html/dataVisual_all.html',
        })
        .state('bacManage.dataVisual_activity', {
            url: '/dataVisual_activity',
            templateUrl: '/html/dataVisual_activity.html',

        })
        .state('bacManage.dataVisual_origin', {
            url: '/dataVisual_origin',
            templateUrl: '/html/dataVisual_origin.html',
        })
        //=================蠢 end================================

        // .state('backstage', {
        //     url: '/html/backstage',
        //     templateUrl: 'html/backstage.html',
        //     resolve: {
        //         loadMyFile: ["$ocLazyLoad", function ($ocLazyLoad) {
        //             return $ocLazyLoad.load(["css/backstage.css"]);
        //         }]
        //     }
        // })

        //
        // .state('backstage.article', {
        //     url: '/html/article?type&status&startAt&endAt&page&size',
        //     templateUrl: 'html/article.html'
        // })
        //
        //
        // .state('backstage.add', {
        //     url: '/html/add?show&title&type&url&img&content&id',
        //     templateUrl: 'html/add.html'
        // })
        //
        // .state('article', {
        //     url: '/html/article',
        //     templateUrl: 'html/article.html',
        //     resolve: {
        //         loadMyFile: ["$ocLazyLoad", function ($ocLazyLoad) {
        //             return $ocLazyLoad.load(["css/backstage.css"]);
        //         }]
        //     }
        // })
});


  




