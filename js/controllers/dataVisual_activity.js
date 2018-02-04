backstage.controller('dataVisual_activityCtrl',function ($scope,$http,$state,$cookies) {

    //=========================================


    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('dataView_activity'));
    var data = [],
        date = [];
    var option =  {};


    $http({
        method:'get',
        url:"/apis/management/activity",
        headers : {
            "Accept": "application/json",
            'Authorization' : "Token "+$cookies.get('token'),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(
            function success(response) {
                option = {
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    title: {
                        left: 'center',
                        text: '用户活跃度',
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [
                        {
                            type: 'inside',
                            start: 0,
                            end: 100
                        },
                        {
                            start: 0,
                            end: 100,
                            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                            handleSize: '80%',
                            handleStyle: {
                                color: '#fff',
                                shadowBlur: 3,
                                shadowColor: 'rgba(0, 0, 0, 0.6)',
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            }
                        }],
                    series: [
                        {
                            name:'模拟数据',
                            type:'line',
                            smooth:true,
                            symbol: 'none',
                            sampling: 'average',
                            itemStyle: {
                                normal: {
                                    color: 'rgb(255, 70, 131)'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    }, {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }])
                                }
                            },
                            data: data
                        }
                    ]
                };

                date.length = 0;
                data.length = 0;



                response.data.forEach(function (val,index) {
                    date.push(val.date);
                    data.push(val.num)
                });


                myChart.setOption(option);
            },
            function error() {
                console.log('链接出错')
            }
        );

    //==========================================







});