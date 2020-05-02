(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchmenu = "";
  $scope.sayMessage = "";

  $scope.displayMsg = function () {
      var message = checkMenu($scope.lunchmenu);
      $scope.sayMessage = message;
  };

  function checkMenu(menu) {
    if(menu.length==0){
      document.getElementById('menuMsg').style.color="red";
      document.getElementById('lunch-menu').style.borderColor="red";
      return "Please enter data first";
    }else{
      var menuArr=menu.split(",");
      var menuArrLen=menuArr.length;

      if(menuArrLen<=3){
        document.getElementById('menuMsg').style.color="green";
        document.getElementById('lunch-menu').style.borderColor="green";
        return "Enjoy!";
      }else{
        document.getElementById('menuMsg').style.color="green";
        document.getElementById('lunch-menu').style.borderColor="green";
        return "Too much!";
      }
    }
  };
}
})();
