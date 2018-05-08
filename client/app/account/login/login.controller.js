'use strict';

class LoginController {
  constructor(Auth, $state) {
    // moved from class body
    this.user = {};
    this.errors = {};
    this.submitted = false;
    // end

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('candidate.list');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

export default LoginController;
