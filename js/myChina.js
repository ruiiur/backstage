/**
 * Created by 谭兴宇 on 2017/4/12.
 */
// $(document).ready(function() {
//     $.get('china.json', function (chinaJson) {
//         echarts.registerMap('china', chinaJson);
//         var chart = echarts.init(document.getElementById('chinaMap'));
//         chart.setOption({
//             series: [{
//                 type: 'map',
//                 map: 'china'
//             }]
//         });
//     });
// })
$(document).ready(function(){
    var chart = echarts.init(document.getElementById('chinaMap'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});