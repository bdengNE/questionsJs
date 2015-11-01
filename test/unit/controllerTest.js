'use strict';

describe('sorting the list of users', function() {
  it('sorts in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    //    var sorted = sortUsers(users);
    //    expect(sorted).toEqual(['jeff', 'jack', 'igor']);
  });
});

describe('TodoCtrl', function() {
  beforeEach(module('todomvc'));
  // variables for injection
  var controller;
  var scope;
  var location;
  var http;
  var sce;
  var localStorage;
  var window;

  // Injecting variables
  // http://stackoverflow.com/questions/13664144/how-to-unit-test-angularjs-controller-with-location-service
  beforeEach(inject(function($location,
    $rootScope,
    $controller,
    $http,
    $localStorage,
    $sce,
    $window){
      // The injector unwraps the underscores (_) from around the parameter names when matching

      scope = $rootScope.$new();
      location = $location;
      controller = $controller;
      http = $http;
      sce = $sce;
      localStorage = $localStorage;
      window = $window;
    }));

    describe('TodoCtrl Testing', function() {
      it('setFirstAndRestSentence', function() {
        var ctrl = controller('TodoCtrl', {
          $scope: scope
        });

        var testInputs = [
          {str:"Hello? This is Sung", exp: "Hello?"},
          {str:"Hello.co? This is Sung", exp: "Hello.co?"},
          {str:"Hello co This is Sung", exp: "Hello co This is Sung"},
          {str:"Hello.co \nThis is Sung", exp: "Hello.co \n"},
          {str:"Hello? This is Sung", exp: "Hello?"},
          {str:"Hello?? This is Sung", exp: "Hello??"},
          {str:"Hello? This is. Sung", exp: "Hello?"},
          {str:"Hello. This is? Sung", exp: "Hello."},
        ];

        for (var i in testInputs) {
          var results = scope.getFirstAndRestSentence(testInputs[i].str);
          expect(results[0]).toEqual(testInputs[i].exp);
        }
      });

      it('RoomId', function() {
        location.path('/new/path');

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location
        });

        expect(scope.roomId).toBe("new");
      });

      it('RoomIdtesting', function() {
        location.path('//');

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location
        });

        expect(scope.roomId).toBe("all");
      });

      it('watchCollection Testing', function() {

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $window: window
        });   
        //scope.$digest();  
        scope.todos[0]={head:"", completed: true, wholeMsg:'wtf'};
        scope.$digest();
        expect(scope.remainingCount).toEqual(0);
        //scope.$digest();
        
        scope.todos[1]={head:"WTF", completed: false,wholeMsg:'wtf'}; 
        scope.$digest();
        expect(scope.allChecked).toEqual(false);
        //scope.$digest();
        scope.todos[2]={head:"WTF", completed: true,wholeMsg:'wtf'}; 
        scope.$digest();
        expect(scope.allChecked).toEqual(false);

      });


      it('toTop Testing', function() {

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location,
          $http: http,
          $sce: sce,
          $localStorage: localStorage,
          $window: window
        });   
         
        scope.toTop();
        expect(window.scrollX).toBe(0);
        expect(window.scrollY).toBe(0);
      });

      it('addTodo testing',function(){
        var ctrl = controller('TodoCtrl', {
          $scope: scope,

        }); 
        scope.input={wholeMsg:" "};
        scope.addTodo()

        expect(scope.addTodo()).toBe();
       //expect(scope.input[1].addTodo()).toBe();
       /*
       scope.input={wholeMsg:"lovesung"};
       spyOn(scope,"getFirstAndRestSentence");
       scope.addTodo();
       expect(scope.getFirstAndRestSentence).toHaveBeenCalledWith(newTodo);
       */
      scope.input={wholeMsg:"lovesung"};
      scope.addTodo()

        expect(scope.addTodo()).toBe();
      })
      it('increaseMax testing',function(){
        var ctrl = controller('TodoCtrl', {
          $scope: scope,

        }); 
        console.log(scope.maxQuestion);
        scope.totalCount= 15;
        scope.increaseMax();
        expect(scope.maxQuestion).toBe(20);
        scope.maxQuestion=10;
        scope.totalCount= 9;
        scope.increaseMax();
        expect(scope.maxQuestion).toBe(10); 


      })

      it('doneEditing testing',function(){
        var ctrl = controller('TodoCtrl', {
          $scope: scope,

        }); 
        console.log(scope.todos);
        scope.todo={wholeMsg:"lovesung"};
        console.log(scope.todo);
        expect(scope.doneEditing(scope.todo)).toBe();
        
        
        //scope.todo={wholeMsg:""};
        //console.log(scope.todo);
        //expect(scope.doneEditing(scope.todo)).toBe();
        
        //scope.todo={wholeMsg:"lovesung"};
        //spyOn(scope,"removeTodo");
        scope.todo={wholeMsg:" "};
        console.log(scope.todo);
        spyOn(scope,"removeTodo");
        scope.doneEditing(scope.todo);
        //spyOn(scope,"removeTodo");
        //expect(scope.todos[1].completed).toEqual(false);      
        //expect(scope.doneEditing(scope.todo)).toBe();
        expect(scope.removeTodo).toHaveBeenCalledWith(scope.todo);
      })

      it('clearCompletedTools testing',function(){
        var ctrl = controller('TodoCtrl', {
          $scope: scope,

        }); 

        scope.todos[1]={completed:true};
        spyOn(scope,"removeTodo");
        scope.clearCompletedTodos()
        expect(scope.removeTodo).toHaveBeenCalledWith(scope.todos[1]);
        scope.todos[1]={completed:false};
        scope.clearCompletedTodos();
        expect(scope.todos[1].completed).toEqual(false);      


      })
      it('autoscroll Testing part1', function() {

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location,
          $http: http,
          $sce: sce,
          $localStorage: localStorage,
          $window: window
        });  
        window.scrollY=10;
        spyOn(scope,"increaseMax");
        angular.element(window).scroll();
        expect(scope.increaseMax).toHaveBeenCalled();

      });
      it('autoscroll Testing part2', function() {

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location,
          $http: http,
          $sce: sce,
          $localStorage: localStorage,
          $window: window
        });  
        window.scrollY= -100000;
        spyOn(scope,"increaseMax");
        angular.element(window).scroll();
        expect(scope.increaseMax).not.toHaveBeenCalled();

      });
      })
    });
 