'use strict';

class AdminController {
  constructor(User, Modal) {
    'ngInject';
    this.Modal = Modal;
    // Use the User $resource to fetch all users
    this.users = User.query();
  }

  delete(user) {
    this.Modal.confirm.delete(() => {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    })(user.name);
  }

  toggleActivation(user) {
    user.$toggleActivation();
    user.active = !user.active;
  }
}

export default AdminController;

