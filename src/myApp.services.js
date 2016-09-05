'use strict';
angular.module('myApp.services', [])
       .factory('StudentDataService', [StudentsData])
       .factory('StudentBookRecordService',[StudentBookRecord])
       .factory('BranchService',[BranchData])
       .factory('CityListService',[CityData]);                        


  function StudentsData(){

    this.data=[
    {
      id:1,
	  firstName:'Harry',
	  lastName:'Sales',
	  branch:'EE',
	  gender:'male',
	  locality:'Gachhibowli',
	  city:'Hyderabad',
	  booksCount:'3'
    },
    {
	  id:2,
	  firstName:'Ramesh',
	  lastName:'Saluja',
	  branch:'EE',
	  gender:'male',
	  locality:'Raidurg',
	  city:'Hyderabad',
	  booksCount:'2'
    },
    {
	  id:3,
	  firstName:'Sam',
	  lastName:'Bhatnagar',
	  branch:'CE',
	  gender:'male',
	  locality:'Bareli',
	  city:'Agra',
	  booksCount:'5'
    },
    {
      id:4,	
	  firstName:'Neetu',
	  lastName:'Chandra',
	  branch:'AE',
	  gender:'female',
	  locality:'Crossing',
	  city:'Dehradun',
	  booksCount:'4'
    },
    {
	  id:5,
	  firstName:'Siya',
	  lastName:'Singh',
	  branch:'BE',
	  gender:'female',
	  locality:'SouthEx',
	  city:'Delhi',
	  booksCount:'7'
    },
    {
	  id:6,
	  firstName:'Varun',
	  lastName:'Sharma',
	  branch:'ME',
	  gender:'male',
	  locality:'Civil Lines',
	  city:'Roorkee',
	  booksCount:'1'
    },
    {
	  id:7,
	  firstName:'Vishal',
	  lastName:'Roy',
	  branch:'CSE',
	  gender:'male',
	  locality:'Indra Nagar',
	  city:'Kota',
	  booksCount:'4'
    },
    {
	  id:8,
	  firstName:'Binoy',
	  lastName:'Chakrobarty',
	  branch:'ECE',
	  gender:'male',
	  locality:'AndheriWest',
	  city:'Mumbai',
	  booksCount:'8'
    }
    ];

    this.studentsBooks=[
    {
      id:1,
	  bookNames:['A','B','H'],
	  issueDate:['12/11/15','01/09/15','03/03/14'],
	  returnDate:['','','04/06/16'],
	  price:['10','50','20']
    },
    {
	  id:2,
	  bookNames:['C','A','M'],
	  issueDate:['09/11/15','08/09/15'],
	  returnDate:['09/12/15',''],
	  price:['10','30']
    },
    {
	  id:3,
	  bookNames:['A','B','H','L','K'],
	  issueDate:['11/11/11','01/01/11','03/09/15','04/07/14','07/05/13'],
	  returnDate:['','','04/06/16','','07/06/13'],
	  price:['10','50','20','100','90']
    },
    {
      id:4,
	  bookNames:['A','B','H','K'],
	  issueDate:['05/09/10','01/01/13','03/10/15','04/07/14'],
	  returnDate:['08/08/15','','04/06/11',''],
	  price:['10','50','20','90']
    },
    {
	  id:5,
	  bookNames:['W','X','Y','Z','A','B','C'],
	  issueDate:['10/10/10','09/01/12','03/09/14','04/07/15','06/05/13','07/08/09','09/09/14'],
	  returnDate:['','09/09/14','04/06/14','','07/06/14','08/09/15','09/09/15'],
	  price:['10','50','20','100','90','60','70']
    },
    {
	  id:6,
	  bookNames:['A'],
	  issueDate:['11/11/11'],
	  returnDate:[''],
	  price:['']
	},
    {
	  id:7,
	  bookNames:['A','B','H','K'],
	  issueDate:['12/11/10','09/01/12','03/09/11','04/07/14'],
	  returnDate:['12/12/12','05/09/13','04/06/16','07/06/13'],
	  price:['10','50','20']
    },
    {
	  id:8,
	  bookNames:['T','U','V','W','X','Y','Z','A'],
	  issueDate:['11/10/11','09/01/12','03/03/11','04/08/15','06/08/15','06/06/16','07/01/12','08/09/10'],
	  returnDate:['01/08/15','','04/06/16','09/09/15','07/06/13','','','09/09/10'],
	  price:['10','50','20','100','90','90','150','120']
    }
    ];
    return this;
  }

  function StudentBookRecord(){
    var serviceObject = {};
    
    serviceObject.getServerData=function(){
          var data=[
                 {
                    personalDetails: {
				                        firstName:'Harry',
					                    lastName:'Sales',
					                    branch:'EE',
					                    gender:'male',
					                    locality:'Gachhibowli',
					                    city:'Hyderabad',
                                     },  
                    booksData:      [
								    {
									  bookName:'A',
									  issueDate:'12/11/15',
									  returnDate:'',
									  price:'10'
								    },
								    {
								      bookName:'B',
									  issueDate:'01/09/15',
									  returnDate:'',
									  price:'50'

								    },
								    {
								      bookName:'H',
									  issueDate:'03/03/14',
									  returnDate:'04/06/16',
									  price:'20'
									
								    }]
                 }, 
                 
                 {
    	            personalDetails:{
								      firstName:'Ramesh',
									  lastName:'Saluja',
									  branch:'EE',
									  gender:'male',
									  locality:'Raidurg',
									  city:'Hyderabad',
			                         },

                    booksData:      [
			                        {
									  bookName:'C',
									  issueDate:'09/11/15',
									  returnDate:'09/12/15',
									  price:'10'
								    },
								    {
									  bookName:'A',
									  issueDate:'08/09/15',
									  returnDate:'',
									  price:'30'
								    }]
			     },

                 {
                    personalDetails:{
			                            firstName:'Sam',
									    lastName:'Bhatnagar',
										branch:'CE',
										gender:'male',
										locality:'Bareli',
										city:'Agra',
                                    },
    	            booksData:      [
								    {
									  bookName:'A',
									  issueDate:'11/11/11',
									  returnDate:'',
									  price:'10'
								    },
								    {
									  bookName:'B',
									  issueDate:'01/01/11',
									  returnDate:'',
									  price:'50'
								    },
								    {
									  bookName:'H',
									  issueDate:'03/09/15',
									  returnDate:'04/06/16',
									  price:'20'
								    },
								    {
									  bookName:'L',
									  issueDate:'04/07/14',
									  returnDate:'',
									  price:'100'
								    },
								    {
									  bookName:'K',
									  issueDate:'07/05/13',
									  returnDate:'07/06/13',
									  price:'90'
								    }]
                  },
                  {
				    personalDetails: {	
									  firstName:'Neetu',
									  lastName:'Chandra',
									  branch:'AE',
									  gender:'female',
									  locality:'Crossing',
									  city:'Dehradun'
				    				  },
                    booksData:      [
									{
									  bookName:'A',
									  issueDate:'11/11/11',
									  returnDate:'',
									  price:'10'
								    },
								    {
									  bookName:'H',
									  issueDate:'12/11/13',
									  returnDate:'11/12/14',
									  price:'100'
								    },
								    {
									  bookName:'L',
									  issueDate:'10/10/13',
									  returnDate:'',
									  price:'40'
								    },
								    {
									  bookName:'Z',
									  issueDate:'09/10/14',
									  returnDate:'09/09/15',
									  price:'60'
								    }]
	              },
	              {
				    personalDetails: {	
									  firstName:'Siya',
									  lastName:'Singh',
									  branch:'BE',
									  gender:'female',
									  locality:'SouthEx',
									  city:'Delhi',
				    				  },
                    booksData:      [
									{
									  bookName:'A',
									  issueDate:'11/11/11',
									  returnDate:'',
									  price:'10'
								    },
								    {
									  bookName:'H',
									  issueDate:'12/11/13',
									  returnDate:'11/12/14',
									  price:'100'
								    },
								    {
									  bookName:'L',
									  issueDate:'10/10/13',
									  returnDate:'',
									  price:'40'
								    },
								    {
									  bookName:'Z',
									  issueDate:'09/10/14',
									  returnDate:'09/09/15',
									  price:'60'
								    },
								    {
									  bookName:'C',
									  issueDate:'09/10/14',
									  returnDate:'10/09/15',
									  price:'70'
								    },
								    {
									  bookName:'T',
									  issueDate:'02/10/14',
									  returnDate:'10/09/15',
									  price:'20'
								    },
								    {
									  bookName:'I',
									  issueDate:'09/10/14',
									  returnDate:'09/09/15',
									  price:'60'
								    },
								    {
									  bookName:'O',
									  issueDate:'07/11/14',
									  returnDate:'09/01/16',
									  price:'80'
								    },
								    ]
	              },
                  {
				    personalDetails: {	
									  firstName:'Varun',
									  lastName:'Sharma',
									  branch:'ME',
									  gender:'male',
									  locality:'Civil Lines',
									  city:'Roorkee',
				    				  },
                    booksData:      [
									{
									  bookName:'A',
									  issueDate:'11/11/11',
									  returnDate:'',
									  price:'10'
								    }
								    ]
	              },
	              {
				    personalDetails: {	
									  firstName:'Vishal',
									  lastName:'Roy',
									  branch:'CSE',
									  gender:'male',
									  locality:'Indra Nagar',
									  city:'Kota',
				    				  },
                    booksData:      [
									{
									  bookName:'A',
									  issueDate:'11/11/11',
									  returnDate:'',
									  price:'10'
								    },
								    {
									  bookName:'E',
									  issueDate:'10/11/13',
									  returnDate:'',
									  price:'100'
								    },
								    {
									  bookName:'H',
									  issueDate:'10/10/10',
									  returnDate:'09/11/15',
									  price:'110'
								    },
								    {
									  bookName:'K',
									  issueDate:'08/01/09',
									  returnDate:'08/09/10',
									  price:'10'
								    }
								    ]

	              },
	              {
				    personalDetails: {	
									  firstName:'Binoy',
									  lastName:'Chakrobarty',
									  branch:'ECE',
									  gender:'male',
									  locality:'AndheriWest',
									  city:'Mumbai',
				    				  },
                    booksData:      [
                                     {
									  bookName:'M',
									  issueDate:'02/11/07',
									  returnDate:'09/10/14',
									  price:'1000'
								    },
								    {
									  bookName:'N',
									  issueDate:'07/11/14',
									  returnDate:'09/10/15',
									  price:'70'
								    },
								    {
									  bookName:'T',
									  issueDate:'08/05/13',
									  returnDate:'09/10/14',
									  price:'20'
								    },
								    {
									  bookName:'G',
									  issueDate:'04/12/14',
									  returnDate:'01/01/15',
									  price:'150'
								    },
									{
									  bookName:'A',
									  issueDate:'11/11/11',
									  returnDate:'',
									  price:'10'
								    },
								    {
									  bookName:'E',
									  issueDate:'10/11/13',
									  returnDate:'',
									  price:'100'
								    },
								    {
									  bookName:'H',
									  issueDate:'10/10/10',
									  returnDate:'09/11/15',
									  price:'110'
								    },
								    {
									  bookName:'K',
									  issueDate:'08/01/09',
									  returnDate:'08/09/10',
									  price:'10'
								    }
								    ]

	              }];
    return data;
    };
    
    serviceObject.getRecordById=function(id){
       id=id-1;
       var student=serviceObject.getServerData()[id];
       return student;
    };


    return serviceObject;
  }


  function BranchData(){
  	this.branch=['AE','BE','CE','ME','EE','ECE','CSE','PE'];
  	return this;
  }

  function CityData(){
  	this.city=['Hyderabad','Agra','Dehradun','Delhi','Roorkee','Mumbai','Kota'];
  	return this;
  }