/**
 * Created by dagecheng on 2017/6/30.
 */
angular.module('starter.services', ['starter.factor'])
  .service('loginServ', ['loginModelFact', '$location', function(loginModelFact, $location){
      return {
          login: function(name, pwd){
              loginModelFact.setParams({
                  userName: name,
                  passWord: pwd
              });

              loginModelFact.execute().then(function(data){
                  console.log('login success!');
              }, function(req){
                  console.log(req.msg);
              }).catch(function(e){
                  console.log(e);
              })
          }
      }
  }]);
