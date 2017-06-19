/**
 * Created by du on 2017/4/11.
 */
app.controller('userAttrCtrl', function ($scope) {
    $scope.genderDistributionChartConfig = {
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
                ['男',0.0],
                ['女', 0.0],
                ['未知',100.0]
            ]
        }],
        size:{
            width:1623,
            height:620
        },
        chart : {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#fff'
        }
    };
    Highcharts.setOptions({
        colors: [ '#ED561B', '#FF9655','rgb(124, 181, 236)'],
        chart: {
            marginTop:10,
            backgroundColor: 'rgba(0,0,0,0)'
        }
    });



    $scope.items=[
        {area:'北京',num:'0'},
        {area:'天津',num:'0'},
        {area:'上海',num:'0'},
        {area:'重庆',num:'0'},
        {area:'河北',num:'0'},
        {area:'河南',num:'0'},
        {area:'云南',num:'0'},
        {area:'辽宁',num:'0'},
        {area:'黑龙江',num:'0'},
        {area:'湖南',num:'0'},
        {area:'安徽',num:'0'},
        {area:'山东',num:'0'},
        {area:'新疆',num:'0'},
        {area:'江苏',num:'0'},
        {area:'浙江',num:'0'},
        {area:'江西',num:'0'},
        {area:'湖北',num:'0'}
    ]


    var chart = echarts.init(document.getElementById('chinaMap'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});