backstage.controller('dataVisual_originCtrl',function ($scope,$http,$state,$cookies) {

    //============

    var myChart = echarts.init(document.getElementById('dataView_origin'));
    var data = [],
        date = [];
    var option =  {};

    $http({
        method:'get',
        url:'/apis/management/origin',
        headers : {
            "Accept": "application/json",
            'Authorization' : "Token "+$cookies.get('token'),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(
            function success(response) {

                var nameArr = [];

                response.data.forEach(function (val) {
                    date.push(val.date)
                });

                for (var x in response.data[0]){
                    if(x !== 'date'){
                        nameArr.push(x)
                    }
                }
                console.log('==-=-=11',date);

                console.log('返回值！！！',response);

                // var nameArr = [];
                // var dateArr = [];


                //找到每个币的不同天的数量
                var obj = {};
                nameArr.forEach(function (val) {
                    obj[val] = [];
                });

                //找到日期
                // response.data.forEach(function (val) {
                //     dateArr.push(val.date)
                // });


                var arr1=[];
                var arr2=[];
                response.data.forEach(function (val) {
                    arr1.push(val.num_invite);
                    arr2.push(val.num_own);
                    obj.num_invite = arr1;
                    obj.num_own = arr2;
                });

                for (var key in obj){
                    data.push({
                        name:key,
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:obj[key]
                    })

                }

                option = {
                    title: {
                        text: '用户来源'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:nameArr
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data:date
                            // data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],

                    series:data
                    // series : [
                    //     {
                    //         name:'邮件营销',
                    //         type:'line',
                    //         stack: '总量',
                    //         areaStyle: {normal: {}},
                    //         data:[120, 132, 101, 134, 90, 230, 210]
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