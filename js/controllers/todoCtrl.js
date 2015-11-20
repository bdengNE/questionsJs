/*global todomvc, angular, Firebase */
'use strict';

/**
* The main controller for the app. The controller:
* - retrieves and persists the model via the $firebaseArray service
* - exposes the model to the template and provides event handlers
*/
todomvc.controller('TodoCtrl',
['$scope', '$location', '$http', '$sce', '$localStorage', '$window',
function ($scope, $location, $http, $sce, $localStorage, $window) {
	// set local storage
	$scope.$storage = $localStorage;

	var scrollCountDelta = 10;
	$scope.maxQuestion = scrollCountDelta;
	//DEBUG ONLY
	var backendUrl = "";

	/*
	$(window).scroll(function(){
	if($(window).scrollTop() > 0) {
	$("#btn_top").show();
	} else {
	$("#btn_top").hide();
	}
	});
	*/
	var splits = $location.path().trim().split("/");
	var roomId = angular.lowercase(splits[1]);
	if (!roomId || roomId.length === 0) {
		roomId = "all";
	}
	$scope.roomId = roomId;
	// Should we limit?
	//.limitToFirst(1000);
	// initialize the room list
	$scope.roomList=[];
	//initialize the todos list
	$scope.todos = [];
    // return all questions
    // get all questions
	var getQuestions = function (query) {
		//request from backend about the todo
		query = query || {}
		if (!query.roomId) query.roomId = roomId;
		var params = $.param(query);
		$http.get(`/api/questions?${params}`)
		.success(function(data) {
			$scope.todos = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	}
	getQuestions();

	var getRoomList = function () {
		$http.get('/api/rooms')
		.success(function(data) {
			$scope.roomList = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	getRoomList();

	$scope.editedTodo = null;

	// pre-precessing for collection
	$scope.$watchCollection('todos', function () {
		var total = 0;
		var remaining = 0;
		$scope.todos.forEach(function (todo) {
			// Skip invalid entries so they don't break the entire app.
			if (!todo || !todo.head ) {
				return;
			}

			total++;
			if (todo.completed === false) {
				remaining++;
			}
		});

		$scope.totalCount = total;
		$scope.remainingCount = remaining;
		$scope.completedCount = total - remaining;
		$scope.allChecked = remaining === 0;
		$scope.absurl = $location.absUrl();
	}, true);
	// dull function, and implement it later
	
	$scope.selectTag = function(input) {
		var Msg;
		try{
			if ($scope.input.wholeMsg.trim()){
				console.log(input)
				Msg = $scope.input.wholeMsg.trim() + input;
			}
			else{
				Msg = input;
			}
		}
		catch(e){Msg=input;}
			$scope.input = {wholeMsg: Msg};
		
	}

	//CUSTOM function adapted to new REST API
	$scope.addTodo = function () {
		var newTodo = $scope.input.wholeMsg.trim();
		
		// No input, so just do nothing
		if (!newTodo.length) {
			return;
		};

		$http.post(backendUrl + '/api/questions', {wholeMsg: newTodo, roomId: $scope.roomId, tags:"233333"})
		.success(function(data) {
			// remove the posted question in the input
			$scope.input.wholeMsg = '';
			getQuestions();
	        console.log(data);
	    })
	    .error(function(data) {
	        console.log('Error: ' + data);
	    });
	};
	$scope.selectChoice=function(){
		$http.get(backendUrl+'/api/questions/' + todo._id + '/'+choice_id+"/vote-up")
		.success(function(data) {

			getQuestions();
			// Disable the button
			$scope.$storage[todo._id] = "selected";
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	}
	$scope.addPolling = function () {
		var newTodo = $scope.input.wholeMsg.trim();

		// No input, so just do nothing
		if (!newTodo.length) {
			return;
		};
		//var choices=[{names:'test1',votes: 20},{names:'test1',votes: 20}];
		var temp=['choice1','choice2','choice3'];
		$http.post(backendUrl + '/api/questions', {wholeMsg: newTodo, roomId: $scope.roomId, type:'polling',choices: temp})
		.success(function(data) {
			// remove the posted question in the input
			$scope.input.wholeMsg = '';
			getQuestions();
	        console.log(data);
	    })
	    .error(function(data) {
	        console.log('Error: ' + data);
	    });
	};

	$scope.editTodo = function (todo) {
		$scope.editedTodo = todo;
		$scope.originalTodo = angular.extend({}, $scope.editedTodo);
	};

	//CUSTOM method for our new RESTAPI
	$scope.doneEditing = function (todo) {
		todo.wholeMsg = todo.wholeMsg.trim();
		if (todo.wholeMsg) {
			//update the todo
			$http.post(backendUrl+'/api/questions/'+todo._id, todo)
			.success(function(data) {
				$scope.editedTodo = null;
				getQuestions();
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		} else {
			//remove the todo
			$scope.removeTodo(todo);
		}
	};

	//ADAPTED for RESTAPI
	$scope.addEcho = function (todo) {
		$http.get(backendUrl+'/api/questions/' + todo._id + "/add-echo")
		.success(function(data) {
			getQuestions();
			// Disable the button
			$scope.$storage[todo._id] = "echoed";
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	$scope.minusEcho = function (todo) {
		$http.get(backendUrl+'/api/questions/' + todo._id + "/minus-echo")
		.success(function(data) {
			getQuestions();
			delete $scope.$storage[todo._id];
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	$scope.voteDown = function (todo) {
		$http.get(backendUrl+'/api/questions/' + todo._id + "/vote-down")
		.success(function(data) {
			getQuestions();
			// Disable the button
			$scope.$storage[todo._id] = "voteddown";
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	$scope.voteDownCancel = function (todo) {
		$http.get(backendUrl+'/api/questions/' + todo._id + "/vote-down-cancel")
		.success(function(data) {
			getQuestions();
			delete $scope.$storage[todo._id];
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	$scope.revertEditing = function (todo) {
		todo.wholeMsg = $scope.originalTodo.wholeMsg;
		$scope.doneEditing(todo);
	};

	//CUSTOM method for new RESTAPI
	$scope.removeTodo = function (todo) {
		$http.delete('/api/questions/'+todo._id)
		.success(function(data) {
			//reload the todos
	        getQuestions();
	        console.log(data);
	    })
	    .error(function(data) {
	        console.log('Error: ' + data);
	    });
	};

	$scope.clearCompletedTodos = function () {
		$scope.todos.forEach(function (todo) {
			if (todo.completed) {
				$scope.removeTodo(todo);
			}
		});
	};

	$scope.toggleCompleted = function (todo) {
		todo.completed = !todo.completed;
		$scope.doneEditing(todo);
	};

	$scope.markAll = function (allCompleted) {
		$scope.todos.forEach(function (todo) {
			todo.completed = allCompleted;
			$scope.doneEditing(todo);
		});
	};
	//ADAPTED for RESTAPI


	/*
	$scope.FBLogin = function () {
		var ref = new Firebase(firebaseURL);
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				$scope.$apply(function() {
					$scope.$authData = authData;
					$scope.isAdmin = true;
				});
				console.log("Authenticated successfully with payload:", authData);
			}
		});
	};
	$scope.FBLogout = function () {
		var ref = new Firebase(firebaseURL);
		ref.unauth();
		delete $scope.$authData;
		$scope.isAdmin = false;
	};
	*/

	$scope.increaseMax = function () {
		if ($scope.maxQuestion < $scope.totalCount) {
			$scope.maxQuestion+=scrollCountDelta;
		}
	};

	$scope.toTop =function toTop() {
		$window.scrollTo(0,0);
	};

	// Not sure what is this code. Todel
	if ($location.path() === '') {
		$location.path('/');
	}
	$scope.location = $location;

	// autoscroll
	angular.element($window).bind("scroll", function() {
		if ($window.innerHeight + $window.scrollY >= $window.document.body.offsetHeight) {
			console.log('Hit the bottom2. innerHeight' +
			$window.innerHeight + "scrollY" +
			$window.scrollY + "offsetHeight" + $window.document.body.offsetHeight);

			// update the max value
			$scope.increaseMax();

			// force to update the view (html)
			$scope.$apply();
		}
	});
	//Return facebook username
	$scope.returnFBusername = function(){
		console.log("thishtisheih");
		//var defer = $q.defer();
		$http.get('/api/users/current')
		.success(function(result){
			if(! result){
				console.log("Sorry you have to login");
			}
			else{
				console.log(result.fb.name);
				$scope.username = result.fb.name;
				document.getElementById("loginWord").innerHTML="Carry the world "+result.fb.name;
				document.getElementById("loginWord").style.fontSize="30px";
				document.getElementById("logout").style.display="";
				document.getElementById("logout").style.float="right";
				document.getElementById("loginWord").style.color="rgb(120,120,120)";
				document.getElementById("notLogin").innerHTML="Homepage";
				document.getElementById("notLogin").setAttribute("href","homepage.html");
			}
		})
		.error(function(result){
			console.log("fffffffffffff");
		});	
	};
	/*$scope.$on('$viewContentLoaded', function() {
		returnFBusername();
    //call it here
	});*/

}]);
