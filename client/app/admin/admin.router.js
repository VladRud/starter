'use strict';

import adminTemplate from './admin.html';
import userDetailsTemplate from './userdetails.html';
import AdminController from './admin.controller';
import UserDetailsController from './user.details.controller';
import './admin.css';

const AdminRouter = function($stateProvider) {
  $stateProvider
    .state('admin', {
      template: ' <ui-view></ui-view>'
    })
    .state('admin.userlist', {
      url: '/admin/users',
      templateUrl: adminTemplate,
      controller: AdminController,
      controllerAs: 'admin',
      authenticate: 'admin'
    })
    .state('admin.userdetails', {
      url: '/admin/users/:id',
      templateUrl: userDetailsTemplate,
      controller: UserDetailsController,
      controllerAs: 'vm',
      authenticate: 'admin',
      resolve: {
        'userObj': ($http, $stateParams) => {
          // $http returns a promise for the url data
          return $http.get('/api/users/' + $stateParams.id)
        },
      }
    });
};

export default AdminRouter;
