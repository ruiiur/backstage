/**
 * Created by du on 2017/4/8.
 */
angular.module('app')
    .controller('mainCtrl',['$scope',function($scope){
        $scope.hide=true;
        $scope.show=false;
        $scope.isHide=function(hide){
            $scope.hide=false;
            $scope.show=true;
        }
        $scope.isShow=function(show){
            $scope.show=false;
            $scope.hide=true;
        }
    }])