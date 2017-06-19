/**
 * Created by du on 2017/4/11.
 */
app.controller('userChartCtrl', function ($scope) {
    $scope.addUserChartConfig = {
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
                name: '新增会员数量',
                data: [0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0]
            },
            {
                name:'新增粉丝数量',
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
    $scope.fansNumChartConfig={
     title : {
        text: ''
    },
    tooltip : {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
     plotOptions :{
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                style: {
                    color:  'black'
                }
            }
        }
    },
    series:[{
        type: 'pie',
        name: '比例',
        data: [
            ['粉丝会员数量',   0.0],
            ['非粉丝会员数量',       100.0]
        ]
    }],
        chart : {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        }
};
    $scope.shoppingChartConfig={
        title : {
            text: ''
        },
        tooltip : {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions :{
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                    style: {
                        color:  'black'
                    }
                }
            }
        },
        series:[{
            type: 'pie',
            name: '比例',
            data: [
                ['多次购物会员数量', 0.0],
                ['非多次购物会员数量', 100.0]
            ]
        }],
        chart : {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
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