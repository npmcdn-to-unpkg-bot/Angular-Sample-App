'use strict';
angular.module('myApp.filters', [])
        
        .filter('searchfilter',function(){
           return function(input, searchText){
                  searchText=searchText.toLowerCase();
                  var output=[];
                  if(searchText!=null){
                    angular.forEach(input, function(student) {
                      var firstName=student.firstName.toLowerCase();
                      var lastName=student.lastName.toLowerCase();
                      if(firstName.indexOf(searchText)>=0 || lastName.indexOf(searchText)>=0)
                        output.push(student);
                    });
                  }else{
                  	output=input;
                  }

              return output;

           }




        });