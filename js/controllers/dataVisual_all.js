
backstage.controller('dataVisual_allCtrl',function ($scope,$http,$state,$cookies) {

    //============

    var myChart = echarts.init(document.getElementById('dataView_all'));
    var data = [],
        date = [];
    var option =  {};

    $http({
        method:'get',
        url:'/apis/management/gift_coin',
        headers : {
            "Accept": "application/json",
            'Authorization' : "Token "+ $cookies.get('token'),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(
            function success(response) {

                console.log('返回值！！！',response);

                var nameArr = [];
                var dateArr = [];

                //找到币名字段
                response.data[0].coin_info.forEach(function (val) {
                    nameArr.push(val.coin_name)
                });

                //找到日期
                response.data.forEach(function (val) {
                    dateArr.push(val.date)
                });

                //找到每个币的不同天的数量
                var obj = {};
                nameArr.forEach(function (val) {
                    obj[val] = [];
                });

                for (var i=0;i<response.data[0].coin_info.length;i++){

                    var dataArr = [];

                    response.data.forEach(function (val,index) {
                        dataArr.push(val.coin_info[i].consumption);
                        obj[val.coin_info[i].coin_name] = dataArr;

                    });
                }

                for (var key in obj){
                    data.push({
                        name:key,
                        type:'line',
                        stack: '总量',
                        data:obj[key]
                    })

                }

                console.log('9090----',date)
                option = {
                    title: {
                        text: '总体发币'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:nameArr
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: dateArr
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: data
                    // series: [
                    //     {
                    //         name:'邀请',
                    //         type:'line',
                    //         stack: '总量',
                    //         data:[120, 132, 101, 134, 90, 230, 210]
                    //     },
                    //     {
                    //         name:'注册',
                    //         type:'line',
                    //         stack: '总量',
                    //         data:[220, 182, 191, 234, 290, 330, 310]
                    //     },
                    //
                    // ]
                };


                myChart.setOption(option);
            },
            function error() {
                console.log('链接出错')
            }
        );

    //============







});