/**
 * Created by du on 2017/4/10.
 */
app.controller('couponStatisticsCtrl', function ($scope) {
    $scope.distributeCouponChartConfig = {
        yAxis :{
            title: {
                text: '0',
                // align: 'horizontal'
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: '#eeeeee'
            }]
        },
        title:{
            text:''
        },
        xAxis : {
            categories: ['2017-03-09', '2017-03-10', '2017-03-11', '2017-03-12', '2017-03-13', '2017-03-14',
                '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', '2017-03-19', '2017-03-20',
                '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', '2017-03-26',
                '2017-03-27', '2017-03-28', '2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01',
                '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07'],
            //横坐标倾斜90度
            labels: { rotation: -90 }

        },
        tooltip : {
            valueSuffix: '\xB0C'
        },
        legend : {
            layout: 'horizontal',
            align: 'bottom',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series : [
            {
                name: '发放的优惠券',
                data: [0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0]
            }
        ],
        useHighStocks: false,
        size:{
            width:1623,
            height:200
        },
        //function (optional)
        func: function (chart) {
            //setup some logic for the chart
        }
    };
    $scope.useCouponChartConfig={
        yAxis :{
            title: {
                text: '0',
                // align: 'horizontal'
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: '#eeeeee'
            }]
        },
        title:{
            text:''
        },
        xAxis : {
            categories: ['2017-03-09', '2017-03-10', '2017-03-11', '2017-03-12', '2017-03-13', '2017-03-14',
                '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', '2017-03-19', '2017-03-20',
                '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', '2017-03-26',
                '2017-03-27', '2017-03-28', '2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01',
                '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07'],
            //横坐标倾斜90度
            labels: { rotation: -90 }

        },
        tooltip : {
            valueSuffix: '\xB0C'
        },
        legend : {
            layout: 'horizontal',
            align: 'bottom',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series : [
            {
                name: '使用的优惠券',
                data: [0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0]
            }
        ],
        useHighStocks: false,
        size:{
            width:1623,
            height:200
        },
        //function (optional)
        func: function (chart) {
            //setup some logic for the chart
        }
    };
    Highcharts.setOptions({
        colors: [ '#ED561B', '#FF9655'],
        chart: {
            marginTop:10,
            backgroundColor: 'rgba(0,0,0,0)'
        }
    });
});