'use strict';

import template from './footer.html';
import './footer.css';

const FooterDirective = function () {
  return {
    templateUrl: template,
    restrict: 'E',
    link: function(scope, element) {
      element.addClass('footer');
    }
  };
};

export default FooterDirective;
