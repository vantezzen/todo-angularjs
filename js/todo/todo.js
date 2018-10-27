angular.module('todo', []);
angular.module('todo').controller('todoController', ['$scope', function($scope) {
    // Item object used for storing todo list items
    $scope.items = {};

    // Item array : Item object converted to array for use with 'orderBy'
    $scope.itemArray = [];

    // Next ID used for next created task
    $scope.nextId = 0;

    // Add item to item list
    $scope.addItem = function() {
        // Don't continue if todo text is empty
        if ($scope.composerValue == '') {
            return;
        }

        let id = $scope.nextId;
        let text = $scope.composerValue;

        $scope.items[id] = {
            id,
            text,
            completed: false
        };
        $scope.nextId++;
        $scope.composerValue = '';

        // Update item array
        $scope.createItemArray();
    }

    // Toggle the completed bool of a task
    $scope.toggleCompleted = function(item) {
        if ($scope.items[item.id]) {
            $scope.items[item.id].completed = !$scope.items[item.id].completed;
        }

        // Update item array
        $scope.createItemArray();
    }

    // Remove item from item list
    $scope.removeItem = function(item) {
        if ($scope.items[item.id]) {
            delete $scope.items[item.id];
        }

        // Update item array
        $scope.createItemArray();
    }

    // Update item array
    $scope.createItemArray = function() {
        $scope.itemArray = [];
        angular.forEach($scope.items, function (val, key) {
            $scope.itemArray.push(val);
        });
    }

    // Create initial item array
    $scope.createItemArray();
}]);