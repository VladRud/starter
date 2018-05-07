'use strict';

const NavbarDirective = () => ({
  templateUrl: 'components/navbar/navbar.html',
  restrict: 'E',
  controller: 'NavbarController',
  controllerAs: 'nav'
});

export default NavbarDirective;
