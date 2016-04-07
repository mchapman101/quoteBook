angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){
  $scope.quotes = dataService.getData();
  $scope.addQuote = function(quote){
    dataService.addData(quote);
  }

  $scope.removeQuote = function(text){
   dataService.removeData(text);
    }

  //end I make changes
});
