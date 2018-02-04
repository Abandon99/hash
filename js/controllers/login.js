

backstage.controller('loginCtrl',function ($scope,$http,$state,$cookieStore,$cookies) {


    $scope.myParams = {};


    $scope.jump = function () {

        console.log($scope.myParams);

        //$state.go('bacManage.dataVisual_increase');

        $http({
            method:'post',
            url:"/apis/accounts/token/",
            headers : {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            data:$scope.myParams
        })
            .then(
                function (response) {
                    console.log(response);

                    $cookies.put("token", response.data.token);

                    if(response.status == 200) {
                        $state.go('bacManage.dataVisual_increase');
                    }else {


                    }
                },
                function error() {
                    console.log('链接出错')
                }
            );

    };







});



