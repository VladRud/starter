'use strict';

class SignupController {
  constructor(Auth, $state) {
    // moved from body
    this.user = {};
    this.errors = {};
    this.submitted = false;
    // end

    this.Auth = Auth;
    this.$state = $state;

    this.success = false;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Account created, redirect to home
        // this.$state.go('main');
        this.success = true;
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

export default SignupController;
