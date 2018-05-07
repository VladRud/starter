'use strict';

import angular from 'angular';
import UtilService from "./util.service";

const utilModule = angular.module('hrDbApp.util', [])
  .factory('Util', UtilService)
  .name;

export default utilModule;
