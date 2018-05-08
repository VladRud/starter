'use strict';

import NavbarController from './navbar.controller';
import template from  './navbar.html';

const NavbarDirective = () => ({
  templateUrl: template,
  restrict: 'E',
  controller: NavbarController,
  controllerAs: 'nav'
});

export default NavbarDirective;
