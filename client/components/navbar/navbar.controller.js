'use strict';

class NavbarController {
  constructor(Auth) {
    // moved from body
    this.menu = [{
      'title': 'Candidates',
      'state': 'candidate.list'
    },
      {
        'title': 'Statistics',
        'state': 'stats'
      }];

    this.menuAdmin = [{
      'title': 'Agencies',
      'state': 'entity.agency'
    },
      {
        'title': 'Job Positions',
        'state': 'entity.position'
      },
      {
        'title': 'Origins',
        'state': 'entity.origin'
      },
      {
        'title': 'Admin',
        'state': 'admin.userlist'
      }];

    this.isCollapsed = true;
    //end moved from body

    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

export default NavbarController;
