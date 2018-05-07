'use strict';

class LoginController {
  //start-non-standard
  // Fixme: uncomment these 3 lines and make them work as designed
  /*user = {};
  errors = {};
  submitted = false;*/
  //end-non-standard

  constructor(Auth, $state) {
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
