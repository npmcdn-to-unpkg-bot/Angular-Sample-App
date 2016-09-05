'use strict';
angular.module('myApp.directives', [])
    
    .directive('tableViewDirective',function(){
     return {
               restrict: 'A',
               scope:{
                        student: '='
               },
               templateUrl:'Directives/bookTableView.html',
               replace: true,
               link: function(scope, element, attrs)
                  {
                    // console.log(scope);
                    // console.log(scope.student);
                  }



     };

    });
