'use strict';
angular.module('myApp.controllers', ['ui.router'])

    .controller('IndexController',[function(){
    
     var vm=this;
     vm.views = {
         STUDENTS: 0,
         BOOKS: 1,
         ABOUT:2,
         LOGIN:3
     };
     vm.view=vm.views.STUDENTS;
    }])

    
    .controller('StudentsController',['StudentDataService','searchfilterFilter',function(StudentDataService,searchfilterFilter){
    
     var vm=this;
     vm.views = {
         ICON: 0,
         LIST: 1
     };
     vm.view=vm.views.ICON;
     vm.students=StudentDataService.data;
     vm.searchText='';
     vm.filteredStudents=vm.students;
     
     vm.applySearch=function(){
     	vm.filteredStudents=searchfilterFilter(vm.students,vm.searchText);
     }
    }])

    .controller('StudentEditController',['StudentDataService','BranchService','CityListService','$stateParams',function(StudentDataService, BranchService, CityListService, $stateParams){
       
       var vm=this;
       vm.student = $stateParams.student;
       vm.cityList = CityListService.city;
       vm.branchList = BranchService.branch;
     
       
       vm.submit=function(formStudent){
        var updateService=[];
        angular.forEach(StudentDataService.data,function(student){
          if(student.id === formStudent.id)
          	 updateService.push(formStudent);
          else 
          	 updateService.push(student);

        });
        StudentDataService.data=updateService;
       }

       vm.reset=function(formStudent){
       	vm.student={};
       	vm.student.id=formStudent.id;
       }

    }])
    .controller('StudentBooksController',['$stateParams','StudentBookRecordService','$state',function($stateParams,StudentBookRecordService,$state){
      var vm=this;
      vm.studentId=parseInt($stateParams.studentId);
      vm.student=StudentBookRecordService.getRecordById(vm.studentId);
      console.log('student is'+ vm.student.personalDetails.firstName);
       
     }])
    .controller('BooksController',['StudentBookRecordService',function(StudentBookRecordService){
       var vm=this;
       vm.data=StudentBookRecordService.getServerData();
    }]);
