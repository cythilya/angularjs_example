var app = angular.module('todolist', []);
app.controller('todosCtrl', function($scope) {
    $scope.master = undefined;
    $scope.todos = [
        { id: 1, title: 'Buy milk', status: 1, edit: false}, //0: active, 1: done
        { id: 2, title: 'Call Mary', status: 0, edit: false },
        { id: 3, title: 'Visit Johe', status: 0, edit: false },
        { id: 4, title: 'Write an article', status: 0, edit: false }
    ];
    $scope.counter = $scope.todos.length;

    //add a new item
    $scope.addItem = function(newItem){
        var newInputItem = angular.copy(newItem),
            newItem = { id: $scope.counter+1, title: newInputItem, status: 0};
        if(newItem.title != undefined){
            $scope.todos.push(newItem);
            $scope.reset();
        }
    };

    //after adding a new item, reset the input field
    $scope.reset = function(){
        $scope.newItem = angular.copy($scope.master);
    };

    //update an item
    $scope.edit = function(item){
        var thisItem = item;
        thisItem.edit = true;
        document.getElementById('edit-input-' + thisItem.id).value = thisItem.title;
    };
    $scope.save = function(item, obj){
        var thisItem = item,
            thisInputValue = document.getElementById('edit-input-' + thisItem.id).value;

        if(thisInputValue != ''){
            thisItem.edit = false;
            thisItem.title = thisInputValue;
        }
    }

    //remove an item
    $scope.remove = function(item){
        var thisItem = item,
            index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);       
    };

    //change item status - done or undo
    $scope.done = function(item){
        var thisItem = item;
        thisItem.status = 1;
    };
    $scope.undo = function(item){
        var thisItem = item;
        thisItem.status = 0;
    };

    //caculate number
    $scope.totalCount = function(){
        return $scope.todos.length;
    };
    $scope.activeCount = function(){
        var activeArray = [];
        angular.forEach($scope.todos, function(value, key) {
            if(value.status === 0){
                this.push(value);    
            }
        }, activeArray);
        return activeArray.length;
    };
    $scope.inactiveCount = function(){
        var inactiveArray = [];
        angular.forEach($scope.todos, function(value, key){
            if(value.status === 1){
                this.push(value);
            }
        }, inactiveArray);
        return inactiveArray.length;
    };
});
