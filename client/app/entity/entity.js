'use strict';

import EntityController from './entity.controller';
import entityTemplate from './entity.html';
import './entity.css';

const EntityRouter = function($stateProvider) {
  $stateProvider
    .state('entity', {
      template: ' <ui-view></ui-view>'
    })
    .state('entity.agency', {
      url: '/agency',
      params: {entity: 'agency', title: 'Agencies'},
      templateUrl: entityTemplate,
      controller: EntityController,
      controllerAs: 'vm',
      authenticate: 'user'
    })
    .state('entity.position', {
      url: '/position',
      params: {entity: 'position', title: 'Job positions'},
      templateUrl: entityTemplate,
      controller: EntityController,
      controllerAs: 'vm',
      authenticate: 'user'
    })
    .state('entity.origin', {
      url: '/origin',
      params: {entity: 'origin', title: 'How candidates got to know about us'},
      templateUrl: entityTemplate,
      controller: EntityController,
      controllerAs: 'vm',
      authenticate: 'user'
    });
};

export default EntityRouter;
