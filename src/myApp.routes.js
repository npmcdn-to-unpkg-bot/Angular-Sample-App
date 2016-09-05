
angular
    .module('myApp.routes', ['ui.router'])
    .config(config)
    .run(function($state) {
    $state.go('students'); 
});

function config ($stateProvider) {
    $stateProvider.
        state('students',{
          url: '/students', 
          templateUrl: 'views/students/students.html',         
          controller: 'StudentsController as vm'
        })
        .state('studentEdit',{
          url:'/studentEdit/:studentId',
          params:{
                   studentId:'1',
                   student:{}
                  },
          templateUrl:'views/students/studentEdit.html',
          controller:'StudentEditController as vm'
        })
        .state('studentBooks',{
          url:'/student/:studentId',
          params:{
                    studentId:''
                 },
          templateUrl:'views/books/studentBooks.html',
          controller:'StudentBooksController as vm'
          
        })
        .state('books',{
          url: '/Allbooks', 
          templateUrl: 'views/books/allbooks.html',         
          controller: 'BooksController as vm'
        })
        .state('oneGenre',{
                    url:'/editGenre/:genreId',
                    params:{
                            genre: null,
                            currentPage:'1',
                            },
                    templateUrl:'genreEdit.html',
                    controller:'GenreCtrl as genre'
        });
}