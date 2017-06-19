/**
 * Created by du on 2017/4/10.
 */
angular.module('app').directive('contentEditor', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            //创建编辑器
            var editor = new wangEditor('editor');
            editor.onchange = function () {
                scope.$apply(function () {
                    var html = editor.$txt.html();
                    ctrl.$setViewValue(html);

                    if (html == '<p><br></p>') {
                        scope.isHtmlNull = true;
                    } else {
                        scope.isHtmlNull = false;
                    }
                });
            };
            editor.create();
        }
    };
});