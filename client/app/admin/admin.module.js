'use strict';

import angular from 'angular';
import authModule from './../../components/auth/auth.module';
import uiRouter from '@uirouter/angularjs';
import AdminController from "./admin.controller";
import UserDetailsController from "./user.details.controller";
import AdminRouter from "./admin.router";

let adminModule = angular.module('hrDbApp.admin', [
  // 'hrDbApp',
  authModule,
  uiRouter,
  // uiToggle
])
  .controller('AdminController', AdminController)
  .controller('UserDetailsController', UserDetailsController)
  .config(AdminRouter)
  .name;

export default adminModule;