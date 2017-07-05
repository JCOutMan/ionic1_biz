/**
 * Created by JC on 2017/7/5.
 */
angular.module('starter.factor', ['starter.service'])
.factory('loginModelFact', ['modelServ', function(modelServ){
    var model = {};
    model.__proto__ = modelServ;
    model.url = '/businessapi/user/loginByUser.do';
    return model;
}]);