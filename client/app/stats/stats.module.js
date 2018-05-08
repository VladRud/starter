'use strict';

import angular from 'angular';
import authModule from './../../components/auth/auth.module';
import uiRouter from '@uirouter/angularjs';
import chartJs from 'angular-chart.js';
import uiSelect from 'ui-select';
import daterangepickerModule from "../../components/daterangepicker/daterangepicker";
import StatsService from "./stats.service";
import StatsComponent from "./stats.component";
import StatsAgencyComponent from "./stats-agency/stats-agency.component";
import StatsDateFilterComponent from "./stats-date-filter/stats-date-filter.component";
import StatsMonthComponent from "./stats-month/stats-month.component";
import StatsOriginComponent from "./stats-origin/stats-origin.component";
import StatsPositionFilterComponent from "./stats-position-filter/stats-position-filter.component";

let statsModule = angular
  .module('hrDbApp.stats', [
    // 'hrDbApp',
    authModule,
    uiRouter,
    chartJs,
    uiSelect,
    daterangepickerModule
  ])
  .component('stats', StatsComponent)
  .component('statsAgency', StatsAgencyComponent)
  .component('statsDateFilter', StatsDateFilterComponent)
  .component('statsMonth', StatsMonthComponent)
  .component('statsOrigin', StatsOriginComponent)
  .component('statsPositionFilter', StatsPositionFilterComponent)
  .service('StatsService', StatsService)
  .config(function ($stateProvider) {
    $stateProvider.state({
      name: 'stats',
      url: '/stats',
      component: 'stats',
      authenticate: 'user',
      resolve: {
        'positions': (Entity) => Entity.getPositions(),
        'agencies': (Entity) => Entity.getAgencies(),
        'origins': (Entity) => Entity.getOrigins()
      }
    })
  })
  .name;

export default statsModule;