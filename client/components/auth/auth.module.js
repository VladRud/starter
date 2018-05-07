'use strict';
import constantsModule from './../../app/app.constant';
import utilModule from './../util/util.module';
import ngCookies from 'angular-cookies';
import uiRouter from '@uirouter/angularjs';
import AuthService from "./auth.service";
import authInterceptor from "./interceptor.service";
import UserResource from "./user.service";
import ConvertToNumberDirective from "../convertToNumber/convertToNumber.directive";

let authModule = angular.module('hrDbApp.auth', [
  constantsModule,
  utilModule,
  ngCookies,
  uiRouter
])
  .factory('Auth', AuthService)
  .factory('authInterceptor', authInterceptor)
  .factory('User', UserResource)
  .directive('convertToNumber', ConvertToNumberDirective)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  })
  .name;

export default authModule;