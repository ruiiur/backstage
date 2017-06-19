/**
 * Created by du on 2017/4/10.
 */
angular.module('app')
.controller('applyCtrl',['$scope',function($scope){
    $('#colorSelector').ColorPicker({
        onChange: function(hsb, hex, rgb) {
            $('#colorSelector').css('backgroundColor', '#' + hex);
        }
    });
}])