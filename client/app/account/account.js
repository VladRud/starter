'use strict';

import loginTemplate from './login/login.html';
import signupTemplate from './signup/signup.html';
import settingsTemplate from './settings/settings.html';

import LoginController from './login/login.controller';
import SignupController from './signup/signup.controller';
import SettingsController from './settings/settings.controller';


const AccountRouter = function($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: loginTemplate,
      controller: LoginController,
      controllerAs: 'vm'
    })
    .state('logout', {
      url: '/logout?referrer',
      referrer: 'login',
      template: '',
      controller: function($state, Auth) {
        var referrer = $state.params.referrer ||
          $state.current.referrer ||
          'login';
        Auth.logout();
        $state.go(referrer);
      }
    })
    .state('signup', {
      url: '/signup',
      templateUrl: signupTemplate,
      controller: SignupController,
      controllerAs: 'vm'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: settingsTemplate,
      controller: SettingsController,
      controllerAs: 'vm',
      authenticate: true
    });
};
const AccountHook = function($rootScope) {
  $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
    if (next.name === 'logout' && current && current.name && !current.authenticate) {
      next.referrer = current.name;
    }
  });
};

export {AccountRouter};
export {AccountHook};
