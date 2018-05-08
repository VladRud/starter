'use strict';

import MainController from './main.controller';
import mainTemplate from './main.html';
import './main.css';

const MainRouter = function($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: mainTemplate,
      controller: MainController,
      controllerAs: 'main'
    });
};

export default MainRouter;

