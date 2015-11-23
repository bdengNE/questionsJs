'use strict';

var questionList=[{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt:"2015-10-31T11:57:44.434Z",
  tags: "...",
  echo: 3,
  type:"polling",
  order: 3
},{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt: "2015-10-31T11:57:44.434Z",
  tags: "...",
  echo: 2,
  type:"polling",
  order: 4
},{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt: "2015-10-31T11:57:44.434Z",
  tags: "...",
  echo: 2,
  type:"question",
  order: 5
},{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt: "2015-10-31T11:57:44.434Z",
  tags: "...",
  echo: 2,
  type:"polling",
  order: 6
},{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt: "2015-10-31T11:57:44.434Z", //new
  tags: "...",
  type:"question",
  echo: 2,
  order: 0
},{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt: "2015-10-31T11:57:44.434Z", //new
  tags: "...",
  echo: 0,
  type:"polling",
  order: 2
},{
  wholeMsg: "newTodo",
  head: "head",
  headLastChar: "?",
  desc: "desc",
  linkedDesc: "linkedDesc",
  completed: false,
  createdAt: "2015-10-31T11:57:44.434Z", // latest
  tags: "...",
  echo: 0,
  type:"polling",
  order: 1
}];

describe('TodoCtrl', function() {
  beforeEach(module('todomvc'));

  describe('questionFilter Testing', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER'); //TODO: what is this provide?
      console.log("provide.value: " + $provide.value);
    }));

    it('has a question filter', inject(function($filter) {
      expect($filter('questionFilter')).not.toBeNull();
    }));

    it('Filter order test', inject(function(questionFilterFilter) { // need to put Filter suffix
      var filteredList = questionFilterFilter(questionList, 100);
      /*
      for (var i in filteredList) {
        expect(""+filteredList[i].order).toEqual(i);
      }
      */
    }));

    it('Filter max test', inject(function(questionFilterFilter) { // need to put Filter suffix
      var filteredList = questionFilterFilter(questionList, 1);
      //expect(filteredList.length).toEqual(5);

      for (var i in filteredList) {
        //expect(""+filteredList[i].order).toEqual(i);
      }
    }));
  });
});


describe('TodoCtrl', function() {
  beforeEach(module('todomvc'));

  describe('questionFilter_1 Testing', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER'); //TODO: what is this provide?
      console.log("provide.value: " + $provide.value);
    }));

    it('has a question filter', inject(function($filter) {
      expect($filter('questionFilter_1')).not.toBeNull();
    }));

    it('Filter order test', inject(function(questionFilter_1Filter) { // need to put Filter suffix
      var filteredList = questionFilter_1Filter(questionList);
      for (var i in filteredList) {
        expect(""+filteredList[i].type).toEqual('question');
      }
    }));
  });
});


describe('TodoCtrl', function() {
  beforeEach(module('todomvc'));

  describe('questionFilter_2 Testing', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER'); //TODO: what is this provide?
      console.log("provide.value: " + $provide.value);
    }));

    it('has a question filter', inject(function($filter) {
      expect($filter('questionFilter_2')).not.toBeNull();
    }));

    it('Filter order test2', inject(function(questionFilter_2Filter) { // need to put Filter suffix
      var filteredList = questionFilter_2Filter(questionList);
      for (var i in filteredList) {
        expect(""+filteredList[i].type).toEqual('polling');
      }
    }));
  });
});
