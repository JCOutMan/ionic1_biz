/**
 * Created by dagecheng on 2017/6/30.
 */
angular.module('starter.controllers', ['starter.services'])
  .controller('loginCtrl', function($scope, loginServ){
    $scope.info = {};
    $scope.login = function(){
      loginServ.login($scope.info.uname, $scope.info.pwd);
    }
  });
