/**
 * Created by JC on 2017/7/5.
 */
angular.module('starter.service', [])
    .service('modelServ', ['$http', '$q', function($http, $q){
        this.url = '';
        this.method = 'GET';
        this.params = {};
        this.setParams = function(params){
            this.params = params;
        };

        this.execute = function(isTakeOrigin){
            var defer = $q.defer();
            var httpReqult = null;
            if(this.url === '' || !angular.isString(this.url)){
                throw Error('this.url must string!');
            }

            if(this.method == 'GET'){
                httpReqult = $http.get(this.url + '?userName=' + this.params.userName + '&passWord=' + this.params.passWord + '&language=zh_CN', this.params);

            }else if(this.method == 'POST'){
                httpReqult = $http.post(this.url, this.params);
            }else{
                throw Error('no method!');
            }

            if(isTakeOrigin){
                return httpReqult;
            }

            httpReqult.then(function(res){
                if(res.status !== 200){
                    throw Error('requst fail!');
                }
                if(!angular.isDefined(res.data.data)){
                    defer.reject('error respond data!')
                }else {
                    if(res.returnCode == 0) {
                        defer.resolve(res.data.data);
                    }else{
                        defer.reject(res.data);
                    }
                }
            }, function(error){
                throw Error('requst fail!');
            });

            return defer.promise;
        }
    }]);