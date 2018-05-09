'use strict';

import angular from 'angular';
import authModule from './../components/auth/auth.module';
import adminModule from './admin/admin.module';
import statsModule from './stats/stats.module';
import constantsModule from './app.constant';
import metaphoneModule from './../components/metaphone/metaphone.module';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';
import validationMatch from 'angular-validation-match';
import ngFileUpload from 'ng-file-upload';
import angularSpinner from 'angular-spinner';
import angularMoment from 'angular-moment';
import LoginController from './account/login/login.controller';
import SettingsController from './account/settings/settings.controller';
import SignupController from './account/signup/signup.controller';
import CandidateController from './candidate/candidate.controller';
import CandidateListController from './candidate/candidate.list.controller';
import EntityController from './entity/entity.controller';
import MainController from './main/main.controller';
import NavbarController from './../components/navbar/navbar.controller';
import EntityFactory from './../components/entity/entity.service';
import FooterDirective from '../components/footer/footer.directive';
import InterviewStatusDirective from '../components/interviewStatus/interviewStatus.directive';
import ModalFactory from '../components/modal/modal.service';
import MongooseErrorDirective from '../components/mongoose-error/mongoose-error.directive';
import NavbarDirective from '../components/navbar/navbar.directive';
import SearchFactory from '../components/search/search.service';
import SocketFactory from '../components/socket/socket.service';
import VisitController from '../components/visit/visit.controller';
import VisitsDirective from '../components/visit/visit.directive';
import CandidateRouter from './candidate/candidate';
import {AccountRouter} from './account/account'
import {AccountHook} from './account/account'
import HasOpenVisitsFilter from '../components/visit/visit.filters';
import EntityRouter from './entity/entity';
import './app.css';
import './../favicon.ico';
import 'bootstrap/less/bootstrap.less';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

// TODO: import btford.socket-io

angular.module('hrDbApp', [
  authModule,
  adminModule,
  statsModule,
  constantsModule,
  metaphoneModule,
  ngCookies,
  ngResource,
  ngSanitize,
  // /*'btford.socket-io',*/
  uiRouter,
  uiBootstrap,
  validationMatch,
  ngFileUpload,
  angularSpinner.angularSpinner.name,
  angularMoment
])
  .controller('LoginController', LoginController)
  .controller('SettingsController', SettingsController)
  .controller('SignupController', SignupController)
  .controller('VisitController', VisitController)
  .controller('CandidateController', CandidateController)
  .controller('CandidateListController', CandidateListController)
  .controller('EntityController', EntityController)
  .controller('MainController', MainController)
  .controller('NavbarController', NavbarController)

  .factory('Entity', EntityFactory)
  .factory('Modal', ModalFactory)
  .factory('Search', SearchFactory)
  .factory('socket', SocketFactory)
  .directive('footer', FooterDirective)
  .directive('interviewStatus', InterviewStatusDirective)
  .directive('mongooseError', MongooseErrorDirective)
  .directive('navbar', NavbarDirective)
  .directive('visit', VisitsDirective)
  .filter('hasOpenVisits', HasOpenVisitsFilter)
  .config(CandidateRouter)
  .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(function ($httpProvider) {

    var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    function convertDateStringsToDates(input) {
      // Ignore things that are not objects.
      if (typeof input !== 'object') return input;

      for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        var match;
        // Check for string properties which look like dates.
        // TODO: {Eugen Kochuev} Improve this regex to better match ISO 8601 date strings.
        if (typeof value === 'string' && (match = value.match(regexIso8601))) {
          // Assume that Date.parse can parse ISO 8601 strings, or has been shimmed in older browsers to do so.
          var milliseconds = Date.parse(match[0]);
          if (!isNaN(milliseconds)) {
            input[key] = new Date(milliseconds);
          }
        } else if (typeof value === 'object') {
          // Recurse into object
          convertDateStringsToDates(value);
        }
      }
    }

    $httpProvider.defaults.transformResponse.push(function (responseData) {
      convertDateStringsToDates(responseData);
      return responseData;
    });
  })
  .config(AccountRouter)
  .config(EntityRouter)
  .run(AccountHook)
  .run(amMoment => {
    amMoment.changeLocale('en', {
      longDateFormat: {
        LTS: 'HH:mm:ss',
        LT: 'HH:mm',
        L: 'MM.DD.YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY HH:mm',
        LLLL: 'dddd, MMMM D, YYYY HH:mm'
      }
    });
  });
