

backstage.controller('bacManageCtrl',function ($scope,$state) {

    $scope.dataView = {};

    $("#collapseListGroup1 ul li").on('click',function (e) {
        var data_val = $(this).attr('data-val');


        switch (data_val) {
            case '1' :
                console.log(9988);
                // $scope.dataView.url = "/apis/management/increase";
                //$scope.dataView.title = "数量增长";
                $state.go('bacManage.dataVisual_increase');
                break;
            case '2' :
               // $scope.dataView.url = "/apis/management/gift_coin";
                //$scope.dataView.title = "总体发币";
                $state.go('bacManage.dataVisual_all');

                break;
            case '3' :
                //$scope.dataView.url = "/apis/management/activity";
                //$scope.dataView.title = "dataVisual_activity";
                $state.go('bacManage.dataVisual_activity');

                break;
            case '4' :
                //$scope.dataView.url = "/apis/management/origin";
                //$scope.dataView.title = "用户来源";
                $state.go('bacManage.dataVisual_origin');

                break;
        }


    });

    // $scope.showData = function ($event) {
    //     console.log($event.target);
    //     var target = $event.target.innerHTML;
    //
    //
    //
    // };





});